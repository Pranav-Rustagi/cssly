"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

import type { Artwork } from "@/lib/types";
import { ArtworkCard } from "@/components/artwork-card";
import { DescriptionText } from "@/components/text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface GalleryGridProps {
  artworks: Artwork[];
  tags: { tag: string; count: number }[];
}

type SortOrder = "newest" | "oldest" | "az";

const SORT_OPTIONS: { value: SortOrder; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "az", label: "A–Z" },
];

const SEARCH_DEBOUNCE_MS = 300;

/** Search, tag filter and sort for the gallery grid, all in memory. URL is
 * the source of truth for filters (`q`, repeated `tag`, `sort`) so a link
 * like `/gallery?tag=animation` — which the detail page already emits —
 * loads pre-filtered, and the current view stays shareable. Reads
 * `useSearchParams`, so this must render under a `Suspense` boundary. */
export function GalleryGrid({ artworks, tags }: GalleryGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlQuery = searchParams.get("q") ?? "";
  const selectedTags = useMemo(() => new Set(searchParams.getAll("tag")), [searchParams]);
  const rawSort = searchParams.get("sort");
  const sort = SORT_OPTIONS.some((option) => option.value === rawSort)
    ? (rawSort as SortOrder)
    : "newest";

  // Always holds the latest `searchParams`, so a debounced write scheduled
  // against an older render merges onto whatever the URL is by the time the
  // timer fires, instead of clobbering filter changes made in between.
  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams;

  // Local, immediate state for the text box — debounced before it hits the
  // URL so we don't push a history-affecting update per keystroke. Synced
  // from the URL during render (not an effect) when the URL changes out
  // from under us, eg. a `?q=` deep link or the "clear filters" action.
  const [searchInput, setSearchInput] = useState(urlQuery);
  const [syncedQuery, setSyncedQuery] = useState(urlQuery);
  if (urlQuery !== syncedQuery) {
    setSyncedQuery(urlQuery);
    setSearchInput(urlQuery);
  }

  // Debounced write-back to the URL — keystrokes update `searchInput`
  // immediately (so the input feels responsive) but only land in the URL
  // (and therefore in `router.replace`, which the address bar reflects)
  // after the user pauses typing.
  useEffect(() => {
    if (searchInput === urlQuery) return;
    const timer = setTimeout(() => updateParams({ q: searchInput || null }), SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
    // Intentionally excludes `updateParams`/`urlQuery`: re-running this
    // effect on every render (updateParams is recreated each time) would
    // restart the debounce on every keystroke-unrelated update. `updateParams`
    // reads `searchParamsRef` (always current), so the pending write still
    // merges onto the latest URL state even when this effect doesn't re-run.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  function updateParams(changes: {
    q?: string | null;
    tag?: string[] | null;
    sort?: string | null;
  }) {
    const params = new URLSearchParams(searchParamsRef.current.toString());

    if ("q" in changes) {
      if (changes.q) params.set("q", changes.q);
      else params.delete("q");
    }
    if ("tag" in changes) {
      params.delete("tag");
      for (const tag of changes.tag ?? []) params.append("tag", tag);
    }
    if ("sort" in changes) {
      if (changes.sort && changes.sort !== "newest") params.set("sort", changes.sort);
      else params.delete("sort");
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  function toggleTag(tag: string) {
    const next = new Set(selectedTags);
    if (next.has(tag)) next.delete(tag);
    else next.add(tag);
    updateParams({ tag: Array.from(next) });
  }

  function clearFilters() {
    setSearchInput("");
    setSyncedQuery("");
    router.replace(pathname, { scroll: false });
  }

  const filtered = useMemo(() => {
    const q = urlQuery.trim().toLowerCase();

    let result = artworks.filter((artwork) => {
      const matchesQuery =
        q.length === 0 ||
        artwork.title.toLowerCase().includes(q) ||
        artwork.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesTags =
        selectedTags.size === 0 ||
        Array.from(selectedTags).every((tag) => artwork.tags.includes(tag));

      return matchesQuery && matchesTags;
    });

    result = [...result].sort((a, b) => {
      if (sort === "az") return a.title.localeCompare(b.title);
      const delta = Date.parse(b.date) - Date.parse(a.date);
      return sort === "oldest" ? -delta : delta;
    });

    return result;
  }, [artworks, urlQuery, selectedTags, sort]);

  const hasActiveFilters = urlQuery.length > 0 || selectedTags.size > 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search by title or tag…"
          aria-label="Search artworks"
          className="sm:max-w-xs"
        />
        <Select value={sort} onValueChange={(value) => updateParams({ sort: value as SortOrder })}>
          <SelectTrigger aria-label="Sort artworks" className="sm:w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map(({ tag, count }) => {
          const pressed = selectedTags.has(tag);
          return (
            <Badge
              key={tag}
              variant={pressed ? "default" : "secondary"}
              render={
                <button
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => toggleTag(tag)}
                />
              }
              className="cursor-pointer"
            >
              {tag}
              <span className={pressed ? "opacity-80" : "text-text-muted"}>{count}</span>
            </Badge>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-lg border border-border py-16 text-center">
          <DescriptionText>
            Nothing here matches — try a different search or fewer tags.
          </DescriptionText>
          {hasActiveFilters && (
            <Button type="button" variant="outline" size="sm" onClick={clearFilters}>
              <X className="size-3.5" />
              Clear filters
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
}

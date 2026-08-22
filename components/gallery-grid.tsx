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

  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams;

  const [searchInput, setSearchInput] = useState(urlQuery);
  const [syncedQuery, setSyncedQuery] = useState(urlQuery);
  if (urlQuery !== syncedQuery) {
    setSyncedQuery(urlQuery);
    setSearchInput(urlQuery);
  }

  useEffect(() => {
    if (searchInput === urlQuery) return;
    const timer = setTimeout(() => updateParams({ q: searchInput || null }), SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(timer);
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
      )}
    </div>
  );
}

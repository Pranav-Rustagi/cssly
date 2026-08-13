#!/usr/bin/env node
// Validates every artwork folder under public/preview/. Zero dependencies,
// Node built-ins only. Prints every failure found (does not stop at the
// first one) and exits non-zero if any exist.

import fs from "node:fs";
import path from "node:path";

const PREVIEW_DIR = path.join(process.cwd(), "public", "preview");
const SLUG_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
// Matches explicit http(s) URLs anywhere, plus protocol-relative URLs
// (`//host/path`) when they appear where a browser would actually resolve
// them as a resource reference: `src="//..."`, `href="//..."`, `url(//...)`.
// The stop-char class excludes quotes/angles/parens so the match doesn't
// swallow trailing markup.
const URL_RE = /\bhttps?:\/\/[^\s"'<>)]+|(?<=["'(=])\/\/[^\s"'<>)]+/gi;

const errors = [];

function fail(slug, file, message) {
  errors.push(`[${slug}] ${file}: ${message}`);
}

if (!fs.existsSync(PREVIEW_DIR)) {
  console.error(`No artworks found: ${PREVIEW_DIR} does not exist.`);
  process.exit(1);
}

const slugs = fs
  .readdirSync(PREVIEW_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const seenLower = new Map();
for (const slug of slugs) {
  const lower = slug.toLowerCase();
  if (seenLower.has(lower)) {
    fail(slug, "(folder name)", `slug collides with "${seenLower.get(lower)}" (case-insensitive duplicate)`);
  } else {
    seenLower.set(lower, slug);
  }
  if (!SLUG_RE.test(slug)) {
    fail(slug, "(folder name)", "slug must be URL-safe: lowercase letters, digits, and single hyphens only");
  }
}

for (const slug of slugs) {
  const dir = path.join(PREVIEW_DIR, slug);
  const metaPath = path.join(dir, "meta.json");
  const htmlPath = path.join(dir, "index.html");
  const cssPath = path.join(dir, "style.css");

  const isFile = (p) => fs.existsSync(p) && fs.statSync(p).isFile();
  const hasMeta = isFile(metaPath);
  const hasHtml = isFile(htmlPath);
  const hasCss = isFile(cssPath);

  if (!hasMeta) fail(slug, "meta.json", fs.existsSync(metaPath) ? "is not a regular file" : "file is missing");
  if (!hasHtml) fail(slug, "index.html", fs.existsSync(htmlPath) ? "is not a regular file" : "file is missing");
  if (!hasCss) fail(slug, "style.css", fs.existsSync(cssPath) ? "is not a regular file" : "file is missing");

  if (hasMeta) {
    let meta;
    try {
      meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
    } catch (err) {
      fail(slug, "meta.json", `not valid JSON (${err.message})`);
      meta = null;
    }

    if (meta && typeof meta === "object") {
      for (const field of ["title", "description", "date"]) {
        if (typeof meta[field] !== "string" || meta[field].length === 0) {
          fail(slug, "meta.json", `field "${field}" must be a non-empty string`);
        }
      }
      if (typeof meta.featured !== "boolean") {
        fail(slug, "meta.json", `field "featured" must be a boolean`);
      }
      if (!Array.isArray(meta.tags) || meta.tags.length === 0) {
        fail(slug, "meta.json", `field "tags" must be a non-empty array`);
      } else if (!meta.tags.every((t) => typeof t === "string" && t.length > 0)) {
        fail(slug, "meta.json", `field "tags" must contain only non-empty strings`);
      }
      if (typeof meta.date !== "string" || Number.isNaN(Date.parse(meta.date))) {
        fail(slug, "meta.json", `field "date" does not parse as a date`);
      }
      const viewport = meta.viewport;
      if (
        !viewport ||
        typeof viewport.width !== "number" ||
        typeof viewport.height !== "number" ||
        viewport.width <= 0 ||
        viewport.height <= 0
      ) {
        fail(slug, "meta.json", `field "viewport" must have positive numeric width and height`);
      }
      const author = meta.author;
      if (!author || typeof author.name !== "string" || typeof author.github !== "string") {
        fail(slug, "meta.json", `field "author" must have string "name" and "github"`);
      }
    }
  }

  if (hasHtml) {
    const html = fs.readFileSync(htmlPath, "utf8");
    if (/<script\b/i.test(html)) {
      fail(slug, "index.html", "contains a <script> tag, which is not allowed");
    }
    const urls = html.match(URL_RE);
    if (urls) {
      fail(slug, "index.html", `references external asset(s): ${urls.join(", ")}`);
    }
  }

  if (hasCss) {
    const css = fs.readFileSync(cssPath, "utf8");
    const urls = css.match(URL_RE);
    if (urls) {
      fail(slug, "style.css", `references external asset(s): ${urls.join(", ")}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Artwork validation failed with ${errors.length} error(s):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`Artwork validation passed: ${slugs.length} artwork(s) checked.`);

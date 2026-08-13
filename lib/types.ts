export type ArtworkAuthor = {
  name: string;
  github: string;
};

export type ArtworkViewport = {
  width: number;
  height: number;
};

export type Artwork = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  featured: boolean;
  viewport: ArtworkViewport;
  author: ArtworkAuthor;
};

export type ArtworkWithSource = Artwork & {
  html: string;
  css: string;
};

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string | string[];
  imageUrl: string;
  imageHint?: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  imageHint?: string;
  technologies: string[];
  details?: string; // Optional: for more in-depth technical details
  repoUrl?: string;
  liveUrl?: string;
}

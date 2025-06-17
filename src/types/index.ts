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

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // ISO string format
  summary: string;
  content: string; // Markdown or HTML content
  imageUrl?: string;
  imageHint?: string;
  tags?: string[];
}

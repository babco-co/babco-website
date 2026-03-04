export interface BlogPost {
  title: string;
  slug: string;
  link: string;
  pubDateISO: string;
  creator: string;
  description: string;
  content: string;
  thumbnail: string | null;
}

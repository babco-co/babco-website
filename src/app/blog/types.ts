export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  content: string;
  thumbnail: string;
  source: 'medium' | 'substack';
  uniqueId: string;
}
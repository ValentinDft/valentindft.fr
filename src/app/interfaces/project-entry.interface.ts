export interface ProjectEntry {
  id: string;
  image: string;
  title: string;
  githubLink: string;
  externalLink?: string;
  skills: string[];
  description: string;
  highlight: boolean;
}

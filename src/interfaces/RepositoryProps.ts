export default interface RepositoryProps {
  id: number;
  name: string;
  description: string;
  html_url: string;
  releases_url: string;
  homepage: string;
  archived: boolean;
  disabled: boolean;
  is_template: boolean;
  created_at: string;
  updated_at: string;
  language: string;
  topics: string[];
}

export interface RepositoriesProps {
  repositories: RepositoryProps[];
}

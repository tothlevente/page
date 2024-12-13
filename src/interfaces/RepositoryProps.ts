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
}

export interface RepositoriesProps {
  repositories: RepositoryProps[];
}

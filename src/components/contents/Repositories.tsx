import RepositoryProps from "@/interfaces/RepositoryProps";
import Github from "../icons/github";

import { Button } from "@/components/ui/button";

export default function Repositories({
  repositories,
  setIsLoaded,
  setError,
}: {
  repositories: RepositoryProps[];
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<
    React.SetStateAction<string | null | undefined>
  >;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {repositories.map((item, index) => (
        <div
          key={index}
          className="repository-card"
        >
          <div className="repository-card-header">
            <p className="repository-card-title">{item.name}</p>
            <p>{item.description}</p>
          </div>
          <div className="repository-card-footer">
            <div>
              <Button
                asChild
                className="source-code-button"
              >
                <a
                  href={item.html_url}
                  target="_blank"
                >
                  <Github />
                </a>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

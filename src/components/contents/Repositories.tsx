import RepositoryProps from "@/interfaces/RepositoryProps";
import Github from "../icons/github";
import Globe from "../icons/globe";

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
        maxWidth: "1500px",
        justifySelf: "center",
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
              <Button asChild>
                <a
                  href={item.html_url}
                  target="_blank"
                >
                  <Github />
                </a>
              </Button>
            </div>

            <div>
              {item.homepage ? (
                <Button asChild>
                  <a
                    href={item.homepage}
                    target="_blank"
                    style={{ marginRight: "8px" }}
                  >
                    <Globe />
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

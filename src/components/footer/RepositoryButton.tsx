import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../ui/button";

import packageJson from "package.json";

const RepositoryButton = () => {
  return (
    <Button asChild>
      <a
        className="w-[130px] mr-2"
        href={packageJson.repository}
        target="_blank"
      >
        <ExternalLinkIcon />
        Repository
      </a>
    </Button>
  );
};

export default RepositoryButton;

import { ExternalLinkIcon } from "lucide-react";
import { Button } from "../ui/button";

import packageJson from "package.json";

const LicenseButton = () => {
  return (
    <Button asChild>
      <a
        className="w-[130px] mr-2"
        href={`${packageJson.repository}/blob/main/LICENSE`}
        target="_blank"
      >
        <ExternalLinkIcon />
        License
      </a>
    </Button>
  );
};

export default LicenseButton;

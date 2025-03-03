import RepositoryButton from "./RepositoryButton";
import LicenseButton from "./LicenseButton";
import NetlifyButton from "./NetlifyButton";

import packageJson from "package.json";

const Footer = () => {
  return (
    <div className="grid place-content-center place-items-center text-center mt-[30px]">
      <p>This website is open source and licensed under MIT.</p>
      <p>
        This website is does not use cookies and collect data about you.
      </p>
      <p>For more information please visit the project repository.</p>
      <p>Thank you for your visiting and intrest! 👍️</p>
      <p>Created by Levente in 2024 | v{packageJson.version}</p>
      <div className="flex flex-row p-2.5">
        <RepositoryButton />
        <LicenseButton />
      </div>
      <NetlifyButton />
    </div>
  );
};

export default Footer;

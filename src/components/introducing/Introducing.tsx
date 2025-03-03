import GitHubIcon from "@/assets/icons/GitHubIcon";

import { Button } from "@/components/ui/button";

interface Props {
  bio: string | undefined;
  avatar_url: string | undefined;
}

const Introducing = ({ bio, avatar_url }: Props) => {
  return (
    <div className="introducing-content">
      <img
        src={avatar_url}
        alt="Levente"
        width="250px"
        height="250px"
        className="rounded-full"
      />
      <div className="introducing-text-content">
        <p className="font-bold text-[26px]">Hi! 👋</p>
        <p>My name is Levente.</p>
        <p>{bio}</p>
        <Button
          asChild
          className="m-2.5"
          variant="outline"
        >
          <a
            href="https://github.com/tothlevente"
            target="_blank"
          >
            <GitHubIcon />
            Visit my GitHub page
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Introducing;

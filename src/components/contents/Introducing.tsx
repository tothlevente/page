import IntroducingProps from "@/interfaces/IntroducingProps";

export default function Introducing({
  bio,
  avatar_url,
}: IntroducingProps) {
  return (
    <div className="introducing-content">
      <img
        src={avatar_url}
        alt="Levente"
        width="250px"
        height="250px"
        style={{ borderRadius: "50%" }}
      />
      <div className="introducing-text-content">
        <p style={{ fontWeight: "bold", fontSize: "26px" }}>Hi! 👋</p>
        <p>My name is Levente.</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}

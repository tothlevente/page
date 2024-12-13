import IntroducingProps from "@/interfaces/IntroducingProps";

export default function Introducing({
  bio,
  avatar_url,
}: IntroducingProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "700px",
        margin: "30px",
        justifySelf: "center",
      }}
    >
      <img
        src={avatar_url}
        alt="Levente"
        width="250px"
        height="250px"
        style={{ borderRadius: "50%" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Hi! 👋</p>
        <p>My name is Levente.</p>
        <p>{bio}</p>
      </div>
    </div>
  );
}

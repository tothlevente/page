import { ModeToggle } from "../themes/ModeToggle";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <ModeToggle />
    </div>
  );
}

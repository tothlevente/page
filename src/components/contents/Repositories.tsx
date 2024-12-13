import RepositoryProps from "@/interfaces/RepositoryProps";

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
          style={{ justifyContent: "space-between" }}
          className="relative flex flex-col mx-2 my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
        >
          <div className="p-4">
            <h5 style={{ marginBottom: "5px", fontWeight: "bold" }}>
              {item.name}
            </h5>
            <p style={{ maxWidth: "320px" }}>{item.description}</p>
          </div>
          <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
            <span className="text-sm text-slate-600 font-medium">
              Last updated: 4 hours ago
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

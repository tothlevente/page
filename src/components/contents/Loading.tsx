import LoaderCircle from "../icons/loader-circle";

export default function Loading() {
  return (
    <div className="globally-central content">
      <LoaderCircle />
      <div className="text-lg font-semibold">
        <p className="mt-2 scroll-m-20 text-2xl font-bold tracking-tight">
          Loading...
        </p>
      </div>
    </div>
  );
}

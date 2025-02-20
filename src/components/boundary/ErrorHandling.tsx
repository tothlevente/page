import ErrorCircleIcon from "@/assets/icons/ErrorCircleIcon";

export default function ErrorHandling() {
  return (
    <div className="globally-central content error">
      <ErrorCircleIcon />
      <div className="text-lg font-semibold">
        <p className="mt-2 scroll-m-20 text-2xl font-bold tracking-tight">
          Something went wrong...
        </p>
        <p>Please refresh the page or come back later.</p>
        <p>Thank you for your understanding!</p>
      </div>
    </div>
  );
}

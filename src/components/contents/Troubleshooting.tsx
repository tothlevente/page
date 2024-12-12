import LucideErrorIcon from "../icons/lucide-error-icon";

export default function Troubleshooting({ error }: { error: string }) {
  return (
    <div className="globally-central error-content">
      <LucideErrorIcon />
      <div className="text-lg font-semibold">
        <p className="mt-2 scroll-m-20 text-2xl font-bold tracking-tight">
          Something went wrong...
        </p>
        <p>Please refresh the page or come back later.</p>
        <p className="italic">{error}</p>
        <p>Thank you for your understanding!</p>
      </div>
    </div>
  );
}

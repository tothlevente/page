import { Badge } from "@/components/ui/badge";

export default function IsArchived({ value }: { value: boolean }) {
  return (
    <>
      {value ? (
        <Badge
          className="badge archived-badge"
          variant="secondary"
        >
          public archive
        </Badge>
      ) : null}
    </>
  );
}

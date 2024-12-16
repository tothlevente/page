import { Badge } from "@/components/ui/badge";

export default function IsTemplate({ value }: { value: boolean }) {
  return (
    <>
      {value ? (
        <Badge
          className="template-badge"
          variant="secondary"
        >
          public template
        </Badge>
      ) : null}
    </>
  );
}

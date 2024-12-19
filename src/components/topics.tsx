import { Badge } from "@/components/ui/badge";

export default function Topics({ topics }: { topics: string[] }) {
  return (
    <>
      {topics.map((value, index) => (
        <Badge
          key={index}
          className="badge topics-badge"
          variant="secondary"
        >
          {value}
        </Badge>
      ))}
    </>
  );
}

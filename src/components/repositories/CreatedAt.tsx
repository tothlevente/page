export default function CreatedAt({ value }: { value: string }) {
  return (
    <p className="text-sm">
      <b>Created at:</b> {value.substring(0, 10)}
    </p>
  );
}

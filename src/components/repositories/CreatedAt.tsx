export default function CreatedAt({ value }: { value: string }) {
  return (
    <p className="at">
      <b>Created at:</b> {value.substring(0, 10)}
    </p>
  );
}

/**
 * Renders a schema.org object as a JSON-LD script tag. The data always comes
 * from our own content (never user input), but `<` is still escaped so a
 * value can never prematurely close the script tag.
 */
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    // eslint-disable-next-line react/no-danger
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}

// components/BibleVerse.tsx
import { getRandomVerse } from "@/lib/bible";

export default async function BibleVerse() {
  try {
    const verse = await getRandomVerse();
    return (
      <p>
        "{verse.text}"{" "}
        <span className="font-bold">
          - {verse.book} {verse.reference}
        </span>
      </p>
    );
  } catch {
    return <p>Failed to load verse.</p>;
  }
}

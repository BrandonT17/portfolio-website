// components/BibleVerse.tsx
import { getRandomVerse } from "@/lib/bible";

export default async function BibleVerse() {
  try {
    const verse = await getRandomVerse();
    return (
      <p>
        {verse.text} — {verse.book} {verse.reference}
      </p>
    );
  } catch {
    return <p>Failed to load verse.</p>;
  }
}

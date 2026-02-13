// components/BibleVerse.tsx
import { getRandomVerse } from "@/lib/bible";

export default async function BibleVerse() {
  try {
    const verse = await getRandomVerse();
    return (
      <div className="flex flex-col gap-2">
        <p>"{verse.text}"</p>
        <span className="font-bold flex justify-center">
          {verse.book} {verse.reference}
        </span>
      </div>
    );
  } catch {
    return <p>Failed to load verse.</p>;
  }
}

export async function getRandomVerse() {
  const res = await fetch(
    "https://bible-api.com/data/dra/random/MAT,JHN,PSA,ROM",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to load verse");

  const data = await res.json();
  const verse = data.random_verse;
  return {
    text: verse.text,
    book: verse.book,
    reference: `${verse.chapter}:${verse.verse}`,
  };
}

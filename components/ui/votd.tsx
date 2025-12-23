export default async function BibleVerse() {
    const res = await fetch("https://bible-api.com/data/dra/random/MAT,JHN,PSA,ROM", { cache: "no-store" });

    // if response is not OK, return error message
    if (!res.ok) {
        return <p>Failed to load verse.</p>
    }

    const data = await res.json();
    
    const verse = data.random_verse;
    const text = verse.text;
    const book = verse.book;
    const reference = verse.chapter + ":" + verse.verse;

    return (
        <p>{text} {book} {reference}</p>
    );
}
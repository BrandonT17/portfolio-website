import { featured } from "@/data/featured";

export default function Featured() {
  return (
    <div>
      <div>
        <ul>
          {featured.map((proj) => (
            <li key={proj.name} className="mb-3">
              <h1 className="font-bold italic">"{proj.name}"</h1>
              <p>{proj.description}</p>
              <span className="italic text-sm font-bold">Tags: </span>
                {proj.topics.map((topic) => (
                  <span key={topic} className="italic opacity-75 text-sm">
                    {topic},{" "}
                  </span>
                ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

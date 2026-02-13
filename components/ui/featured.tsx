import { featured } from "@/data/featured";

export default function Featured() {
  return (
    <div>
      <div>
        <ul>
          {featured.map((proj) => (
            <li key={proj.name} className="mb-3">
              <h1 className="font-bold">
                {">"} {proj.name}
              </h1>

              {proj.topics.map((topic) => (
                <span key={topic} className="italic opacity-75 text-sm">
                  {topic},{" "}
                </span>
              ))}
              <p>{proj.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

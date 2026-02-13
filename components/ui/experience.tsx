import { experiences } from "@/data/experience";

export default function Experience() {
  const experience = [...experiences];
  return (
    <div>
      <ul>
        {experience.map((x) => (
          <li key={x.title} className="mb-3">
            <h1 className="font-bold">
              {">"} {x.title} ({x.date})
            </h1>
            <p className="italic opacity-50">{x.role}</p>
            <p>{x.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

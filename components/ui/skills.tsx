import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div>
      <ul className="md:flex md:flex-col gap-1">
        {skills.map((category) => (
          <li key={category.type}>
            <span className="font-bold lowercase">$ ls {category.type}/</span>
            <ul className="flex flex-wrap gap-4 mb-1 border-l-2 pl-3 ml-0.75">
              {category.skills.map((skill) => (
                <li key={skill} className="underline link">
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

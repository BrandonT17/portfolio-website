import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <div>
      <ul className="">
        {skills.map((category) => (
          <li key={category.type}>
            <span className="font-bold">$ ls "{category.type}"</span>
            <ul className="flex flex-row gap-1 mb-1 border-l-2 pl-3 ml-0.75">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="border-4 border-double p-1 hover:bg-black hover:text-white text-sm"
                >
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

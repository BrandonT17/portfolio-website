export type Skill = {
  type: "Language" | "Frontend" | "Backend" | "Database" | "DevOps";
  skills: string[];
};

export const skills: Skill[] = [
  {
    type: "Language",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
  },
  {
    type: "Frontend",
    skills: ["React", "Next.js", "Tailwind", "SvelteKit", "Astro"],
  },
  {
    type: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    type: "Database",
    skills: ["PostgreSQL", "SQLite", "MySQL", "Firebase", "MongoDB"],
  },
  {
    type: "DevOps",
    skills: ["Git", "Docker", "Maven", "Vercel"],
  },
];

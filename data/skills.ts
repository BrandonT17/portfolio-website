export type Skill = {
  type: "Language" | "Frontend" | "Backend & Data" | "Tools";
  skills: string[];
};

export const skills: Skill[] = [
  {
    type: "Language",
    skills: ["Python", "Java", "JavaScript/TypeScript", "SQL", "C++"],
  },
  {
    type: "Frontend",
    skills: ["React", "Next.js", "SvelteKit", "Tailwind", "Astro"],
  },
  {
    type: "Backend & Data",
    skills: [
      "Spring Boot",
      "REST APIs",
      "Redis",
      "PostgreSQL",
      "SQLite",
      "Firestore",
    ],
  },
  {
    type: "Tools",
    skills: ["Git", "Docker", "Linux", "Firebase", "Vercel"],
  },
];

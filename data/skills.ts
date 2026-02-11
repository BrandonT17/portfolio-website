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
    skills: ["React", "Next.js", "Tailwind", "SvelteKit", "Astro"],
  },
  {
    type: "Backend & Data",
    skills: [
      "Node",
      "Express",
      "PostgreSQL",
      "Spring Boot",
      "SQLite",
      "Firestore",
      "Neon",
    ],
  },
  {
    type: "Tools",
    skills: ["Git", "Docker", "Linux", "Firebase", "Vercel", "IntelliJ"],
  },
];

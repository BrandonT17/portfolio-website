export type Skill {
    type: "Language" | "Frontend" | "Backend" | "Tools";
    skills: String[];
};

export const skills: Skill[] = [
    {
        type: "Language", 
        skills: [
            "Python", "Java", "JavaScript", "TypeScript", "SQL", 
        ]
    },
    {
        type: "Frontend",
        skills: [
            "React", "Next.js", "Tailwind", "SvelteKit", "Astro", "Angular", "JavaFX", "HTML/CSS"
        ]
    },
    {
        type: "Backend",
        skills: [
            "REST APIs", "Spring Boot", "Redis", "PostgreSQL", "SQLite", "Firestore", "Vercel", "Drizzle"
        ]
    },
    {
        type: "Tools",
        skills: [
            "Git/GitHub", "Linux", "Firebase", "Firestore", "Docker",
        ]
    },
];
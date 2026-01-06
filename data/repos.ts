import { Project } from "@/lib/github";

// FOR PROJECTS PAGE

export const repos: Project[] = [
  {
    name: "Codexus: Secure Conferencing App",
    description:
      "A peer-to-peer web conferencing app, inspired by the Metal Gear Solid codec call system.",
    url: "https://codexus-fadd6.web.app/",
    topics: [
      "WebRTC",
      "WebSpeechAPI",
      "Firebase",
      "Firestore",
      "SvelteKit",
      "JavaScript",
    ],
    collaborators: [""],
    image: ["/codexus-logo.png"],
  },
  {
    name: "Intention",
    description:
      "A community sharing platform built in Angular for UIC's Newman Center.",
    url: "",
    topics: ["TypeScript", "Angular", "Web Development", "Firebase", "OAuth"],
    image: ["/jpii-logo.png"],
  },
  {
    name: "MyBusinessBoard",
    description:
      "A React app to help businesses manage their social media analytics, integrating Instagram and Twitter APIs with Go backend for live updates.",
    url: "",
    topics: ["React", "JavaScript", "Go", "Analytics", "Web Development"],
    image: ["/sparkhacks-logo.svg"],
  },
  {
    name: "SyncNode",
    description:
      "A CLI distributed file sync tool that allows users to securely sync and send files peer-to-peer. [IN-PROGRESS]",
    url: "",
    topics: [
      "Distributed Systems",
      "Utility",
      "TypeScript",
      "C",
      "Microservices",
      "TCP",
    ],
    image: ["/syncnode-logo.png"],
  },
  {
    name: "Portfolio Website",
    description: "",
    url: "",
    topics: ["Next.js", "Vercel", "Resend", "TypeScript", "Tailwind CSS", "React"],
    image: ["/nextlogo.png"],
  },
  {
    name: "OK Weather Forecast",
    description: "",
    url: "",
    topics: ["JavaFX", "Maven", "Java", "NWS API", "Tailwind CSS"],
    image: [],
  },
];

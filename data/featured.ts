import { Project } from "@/lib/github";

export const featured: Project[] = [
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
  },
  {
    name: "Intention",
    description:
      "A community sharing platform built in Angular for UIC's Newman Center.",
    url: null,
    topics: ["TypeScript", "Angular", "Web Development", "Firebase"],
  },
  {
    name: "MyBusinessBoard",
    description:
      "A React app to help businesses manage their social media analytics, integrating Instagram and Twitter APIs with Go backend for live updates.",
    url: null,
    topics: ["React", "JavaScript", "Go", "Analytics", "Web Development"],
  },
  {
    name: "SyncNode",
    description:
      "A CLI distributed file sync tool that allows users to securely sync and send files peer-to-peer. [IN-PROGRESS]",
    url: null,
    topics: [
      "Distributed Systems",
      "Utility",
      "TypeScript",
      "C",
      "Microservices",
      "TCP",
    ],
  },
];

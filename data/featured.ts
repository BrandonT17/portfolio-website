import { Project } from "@/lib/github";

// FOR HOMEPAGE USE ONLY

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
    url: "",
    topics: ["TypeScript", "Angular", "Web Development", "Firebase"],
  },
  {
    name: "Qupa - AI Fashion",
    description:
      "An AI-powered search tool that lets users shop for products across the web tailored to their fashion needs with styling suggestions and recommendations.",
    url: "",
    topics: [
      "Next.js",
      "Gemini API",
      "SerpAPI",
      "Clerk Auth",
      "TypeScript",
      "Supabase",
    ],
    image: ["/qupa.png"],
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
  },
];

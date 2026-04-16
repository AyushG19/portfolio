import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "real-time-drawing",
    logo: "./visioncraft-logo.svg",
    title: "VisionCraft | Collaborative Whiteboarding Engine",
    link: "https://visioncraftweb.vercel.app/", // Placeholder or repository link
    period: {
      start: "2025",
    },
    skills: [
      "Next.js",
      "Express.js",
      "WebSockets",
      "Redis",
      "PostgreSQL",
      "TypeScript",
      "BullMQ",
      "Prisma",
    ],
    description: `
- Developed a high-performance end-to-end collaborative whiteboarding engine using <b>WebSockets and Redis Pub/Sub</b> for sub-100ms synchronization across concurrent users.
- Engineered a resilient pipeline using <b>BullMQ</b> to throttle high-frequency canvas updates, successfully preventing database bottlenecks.
- Integrated <b>Google GenAI</b> to conditionally render complex diagrams on HTML5 Canvas via natural language text prompts.
- Optimized data retrieval for 1,000+ canvas elements using <b>Prisma ORM and PostgreSQL indexing</b> for high-speed rendering.`,
    isExpanded: true,
  },
  {
    id: "resume-builder-bot",
    title: "GenZume Bot | Effective Resume Builder | 2026",
    link: "",
    logo: "./genzume-logo.jpg",
    period: {
      start: "2026",
    },
    skills: ["TypeScript", "Node.js", "Prisma", "grammY", "MongoDB"],
    description: `- Developed a highly accessible Telegram bot utilizing the <b>grammY</b> framework, enabling users to manage resumes via a 24/7 available interface.
- Architected the backend with <b>Node.js</b>, <b>TypeScript</b> and <b>grammY</b>, integrating <b>MongoDB</b> for structured and scalable user data storage.
- Designed an optimized, real-time interaction flow that reduced user friction for updating professional documents on mobile devices.`,
    isExpanded: true,
  },
  {
    id: "blogging-app",
    title: "Blogging & Article Platform | Full-Stack Web App",
    link: "",
    period: {
      start: "2024",
    },
    skills: [
      "Node.js",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "TanStack Query",
    ],
    description: `- Engineered a full-stack platform with optimized CRUD APIs using <b>Node.js</b> and <b>PostgreSQL</b> for efficient relational data handling.
- Implemented scroll-based data fetching (Infinite Scroll) using <b>TanStack Query</b>, significantly improving loading performance and UX.
- Developed a responsive interface featuring Reddit-inspired interactivity, including asynchronous voting and commenting systems using <b>Tailwind CSS</b>.`,
    isExpanded: true,
  },
]

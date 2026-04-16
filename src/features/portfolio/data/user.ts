import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Ayush",
  lastName: "Gupta",
  displayName: "Ayush Gupta",
  username: "ayushG19",
  gender: "male",
  pronouns: "he/him",
  bio: "Information Technology Student | Developer",
  flipSentences: [
    "Information Technology Student",
    "Passionate Web Developer",
    "Creative Problem Solver",
  ],
  address: "Asansol, West Bengal, India",
  phoneNumber: "KzkxNzkwODgwNzAwMw==", // E.164 format, base64 encoded (+917908807003)
  email: "YXl1c2hndXB0YWEwODZAZ21haWwuY29t", // base64 encoded
  website: "https://ayushg.vercel.app",
  jobTitle: "Student",
  jobs: [],
  about: `
- **B.Tech Student** in Information Technology at Asansol Engineering College (2022 - 2026).
- Skilled in <i>JavaScript</i>, <i>TypeScript</i>, <i>React</i>, <i>Next.js</i>, and modern full-stack web technologies.
- Passionate about building high-performance, <b>real-time applications</b> and robust backend architectures.
- Experience with complex technologies including WebSockets, Redis, BullMQ, and PostgreSQL.
- Always eager to learn, build, and solve challenging technical problems.
`,
  avatar: "./avatar.png",
  ogImage: "./ogImage.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: ["ayush", "ayush gupta", "ayushG", "ayushG19"],
  dateCreated: "2025-04-17", // YYYY-MM-DD
}

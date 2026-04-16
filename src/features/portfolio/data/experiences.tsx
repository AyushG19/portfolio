import { GraduationCapIcon } from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "1",
        title: "Asansol Engineering College",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        icon: <GraduationCapIcon />,
        description: `- B.Tech in Information Technology
- CGPA: 7.9
- Location: Asansol, West Bengal
- Core Subjects: DBMS, Computer Networks, OOP, Data Structure / Algorithms`,
        skills: [
          "Information Technology",
          "Data Structures",
          "Algorithms",
          "DBMS",
          "Computer Networks",
          "OOP",
        ],
        isExpanded: true,
      },
      {
        id: "2",
        title: "Burnpur Riverside School",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        icon: <GraduationCapIcon />,
        description: `- Senior Secondary (12th), CBSE
- Percentage: 74%
- Location: Burnpur, West Bengal`,
        skills: [],
      },
    ],
  },
]

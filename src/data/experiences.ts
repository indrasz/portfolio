export interface Experience {
    company: string;
    role: string;
    type: string; // "Full-time" | "Contract" | "Freelance" | "Internship"
    period: string;
    location: string;
    description: string;
    highlights: string[];
    projects?: string[]; // project slugs related
    logo?: string;
  }
  
  export const experiences: Experience[] = [
    {
      company: "Cerulean Studio",
      role: "Mobile Developer",
      type: "Fulltime",
      period: "2026 — Present",
      location: "Remote · Italy",
      description:
        "Working remotely with an Italian product studio to build and maintain MeetGeek's mobile application — an AI-powered meeting assistant used globally.",
      highlights: [
        "Built cross-platform mobile app with React Native for iOS and Android",
        "Integrated AI-generated meeting summaries and transcripts via REST API",
        "Implemented meeting recording, action item extraction, and history features",
        "Collaborated with European engineering team across time zones",
      ],
      projects: ["meetgeek-mobile"],
    },
    {
      company: "Diksha Technology",
      role: "Fullstack Developer",
      type: "Contract",
      period: "2025 — 2026",
      location: "Remote · Indonesia",
      description:
        "Developed multiple industrial automation and quality management systems for one of Indonesia's leading footwear manufacturers, modernizing factory floor operations.",
      highlights: [
        "Built real-time production monitoring systems for rubber and stitching lines",
        "Designed a centralized Control Room dashboard aggregating multi-line factory data",
        "Revamped legacy Quality Management System with a modern data-driven interface",
        "Worked with Golang backends and Next.js frontends for high-performance dashboards",
      ],
      projects: ["ia-rubber", "ia-stitching", "control-room", "qms-revamp"],
    },
    {
      company: "Ecodify",
      role: "Fullstack Developer",
      type: "Fulltime",
      period: "2023 — 2025",
      location: "On-site · Indonesia",
      description:
        "Delivered end-to-end web and mobile solutions for clients across social, environmental, and e-commerce sectors.",
      highlights: [
        "Built Lazissu's sponsored children management platform with React & Laravel",
        "Developed a Flutter-based carbon stock monitoring app with map integration",
        "Created Grow E-Commerce, a multi-province marketplace built on Laravel",
        "Handled full project lifecycle: requirements, design, development, and deployment",
      ],
      projects: ["anak-asuh-lazissu", "carbonstock-monitoring", "grow-ecommerce"],
    },
  ];
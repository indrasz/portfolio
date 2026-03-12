export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  links: {
    type: 'github' | 'demo' | 'figma';
    url: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "meetgeek-mobile",
    title: "MeetGeek Mobile",
    description:
      "A mobile application for MeetGeek — an AI meeting assistant platform by Cerulean Studio (Italy). Built with React Native for iOS and Android, the app lets users record face-to-face and online meetings, receive AI-generated summaries and transcripts in 50+ languages, review action items, and access their full meeting history — all from their phone.",
    image: "/images/meetgeek-app.png",
    stack: ["React Native", "REST API", "TypeScript"],
    links: [
      { type: "demo", url: "#" },
    ],
  },
  {
    slug: "ia-rubber",
    title: "IA Rubber",
    description:
      "An industrial automation system developed for Adis Dimension Footwear to monitor and manage rubber component production lines. Tracks real-time machine output, material usage, and production targets — giving floor supervisors live visibility into rubber processing for footwear manufacturing.",
    image: "/images/carbonstock-monitoring.png",
    stack: ["Next.js", "Golang", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
  },
  {
    slug: "ia-stitching",
    title: "IA Stitching",
    description:
      "An industrial automation platform built for Adis Dimension Footwear to oversee stitching line operations. Monitors operator productivity, stitch cycle counts, and quality flags in real time — helping production managers reduce defect rates and maintain consistent output across footwear assembly lines.",
    image: "/images/carbonstock-monitoring.png",
    stack: ["Next.js", "Laravel", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
  },
  {
    slug: "control-room",
    title: "Control Room",
    description:
      "A centralized operations dashboard developed for Adis Dimension Footwear, aggregating live data from multiple production lines — including rubber, stitching, and assembly — into a single command view. Designed for factory supervisors to monitor KPIs, track bottlenecks, and respond to anomalies across the entire shoe manufacturing floor.",
    image: "/images/control-room.png",
    stack: ["Next.js", "Golang", "WebSocket", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
  },
  {
    slug: "qms-revamp",
    title: "QMS Revamp",
    description:
      "A revamped Quality Management System for Adis Dimension Footwear, replacing legacy inspection workflows with a modern, data-driven interface. Enables QC teams to log defects, track inspection results per production batch, and generate quality reports — ensuring footwear standards are met consistently across all production stages.",
    image: "/images/qms-revamp.png",
    stack: ["React", "Golang", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
  },
  {
    slug: "anak-asuh-lazissu",
    title: "Website Anak Asuh Lazissu",
    description:
      "A web-based platform for Lazissu to manage and monitor anak asuh (sponsored children), featuring child profiles, donation tracking, and guardian dashboards. Built with React for a responsive UI and Laravel for secure data handling and API integration.",
    image: "/images/anak-asuh-lazissu.png",
    stack: ["React", "Laravel", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
  },
  {
    slug: "carbonstock-monitoring",
    title: "Carbon Stcok Monitoring",
    description: "A cross-platform application built with Flutter for monitoring carbon stock in forestry areas, supported by a robust Laravel backend for real-time data management and user authentication.",
    image: "/images/carbonstock-monitoring.png",
    stack: ["Flutter", "Laravel", "REST API", "MySQL", "Firebase", "Map Integration"],
    links: [
      { type: "github", url: "#" },
      { type: "demo", url: "#" },
    ],
  },
  {
    slug: "grow-ecommerce",
    title: "Grow E-Commerce",
    description:"A full-featured e-commerce platform for selling goods and services across provinces in Indonesia. Built entirely with Laravel, the system supports product listings, service bookings, inter-provincial shipping, user roles, and integrated payment workflows — all styled with Bootstrap for a clean, responsive interface.",
    image: "/images/grow-platform.png",
    stack: ["Laravel (Fullstack)", "MySQL", "Bootstrap", "Blade Templating", "REST API"],
    links: [
      { type: "github", url: "https://github.com/indrasz/grow-ecommerce" },
    ],
  }
];

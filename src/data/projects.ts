export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  year: string;
  description: string;
  image: string;
  stack: string[];
  links: {
    type: 'github' | 'demo' | 'figma';
    url: string;
  }[];
  features?: string[];
}

export const projects: Project[] = [
  {
    slug: "meetgeek-mobile",
    title: "MeetGeek Mobile",
    subtitle: "AI-Powered Meeting Assistant App",
    company: "Cerulean Studio",
    year: "2026",
    description:
      "A mobile application for MeetGeek — an AI meeting assistant platform by Cerulean Studio (Italy). Built with React Native for iOS and Android, the app lets users record face-to-face and online meetings, receive AI-generated summaries and transcripts in 50+ languages, review action items, and access their full meeting history — all from their phone.",
    image: "/images/meetgeek-app.png",
    stack: ["React Native", "REST API", "TypeScript"],
    links: [
      { type: "demo", url: "#" },
    ],
    features: [
      "Record face-to-face and online meetings",
      "AI-generated summaries and transcripts in 50+ languages",
      "Automatic action item extraction",
      "Full meeting history and search",
      "Cross-platform: iOS and Android",
    ],
  },
  {
    slug: "ia-rubber",
    title: "IA Rubber",
    subtitle: "Rubber Production Line Monitoring",
    company: "Adis Dimension Footwear",
    year: "2025",
    description:
      "An industrial automation system developed for Adis Dimension Footwear to monitor and manage rubber component production lines. Tracks real-time machine output, material usage, and production targets — giving floor supervisors live visibility into rubber processing for footwear manufacturing.",
    image: "/images/rubber.png",
    stack: ["Next.js", "Golang", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
    features: [
      "Real-time machine output tracking",
      "Material usage monitoring",
      "Production target dashboards",
      "Shift-based performance reports",
      "Live floor supervisor visibility",
    ],
  },
  {
    slug: "ia-stitching",
    title: "IA Stitching",
    subtitle: "Stitching Line Automation & QC",
    company: "Adis Dimension Footwear",
    year: "2025",
    description:
      "An industrial automation platform built for Adis Dimension Footwear to oversee stitching line operations. Monitors operator productivity, stitch cycle counts, and quality flags in real time — helping production managers reduce defect rates and maintain consistent output across footwear assembly lines.",
    image: "/images/stitching.png",
    stack: ["Next.js", "Laravel", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
    features: [
      "Operator productivity monitoring",
      "Stitch cycle count tracking",
      "Real-time quality flag alerts",
      "Defect rate analytics",
      "Line efficiency dashboards",
    ],
  },
  {
    slug: "control-room",
    title: "Control Room",
    subtitle: "Centralized Factory Operations Dashboard",
    company: "Adis Dimension Footwear",
    year: "2025",
    description:
      "A centralized operations dashboard developed for Adis Dimension Footwear, aggregating live data from multiple production lines — including rubber, stitching, and assembly — into a single command view. Designed for factory supervisors to monitor KPIs, track bottlenecks, and respond to anomalies across the entire shoe manufacturing floor.",
    image: "/images/control-room.png",
    stack: ["Next.js", "Golang", "WebSocket", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
    features: [
      "Multi-line aggregated live data view",
      "KPI monitoring across departments",
      "Bottleneck detection and alerts",
      "WebSocket-powered real-time updates",
      "Role-based supervisor access",
    ],
  },
  {
    slug: "qms-revamp",
    title: "QMS Revamp",
    subtitle: "Quality Management System Modernization",
    company: "Adis Dimension Footwear",
    year: "2025",
    description:
      "A revamped Quality Management System for Adis Dimension Footwear, replacing legacy inspection workflows with a modern, data-driven interface. Enables QC teams to log defects, track inspection results per production batch, and generate quality reports — ensuring footwear standards are met consistently across all production stages.",
    image: "/images/qms-revamp.png",
    stack: ["React", "Golang", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
    features: [
      "Defect logging per production batch",
      "Inspection result tracking",
      "Quality report generation",
      "Legacy workflow replacement",
      "Multi-stage QC process support",
    ],
  },
  {
    slug: "anak-asuh-lazissu",
    title: "Website Anak Asuh Lazissu",
    subtitle: "Sponsored Children Management Platform",
    company: "Lazissu",
    year: "2023",
    description:
      "A web-based platform for Lazissu to manage and monitor anak asuh (sponsored children), featuring child profiles, donation tracking, and guardian dashboards. Built with React for a responsive UI and Laravel for secure data handling and API integration.",
    image: "/images/anak-asuh-lazissu.png",
    stack: ["React", "Laravel", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "demo", url: "#" },
    ],
    features: [
      "Child profile management",
      "Donation tracking per beneficiary",
      "Guardian and admin dashboards",
      "Secure authentication and roles",
      "Responsive web interface",
    ],
  },
  {
    slug: "carbonstock-monitoring",
    title: "Carbon Stock Monitoring",
    subtitle: "Forestry Carbon Stock Tracker",
    company: "Freelance",
    year: "2022",
    description:
      "A cross-platform application built with Flutter for monitoring carbon stock in forestry areas, supported by a robust Laravel backend for real-time data management and user authentication.",
    image: "/images/carbonstock-monitoring.png",
    stack: ["Flutter", "Laravel", "REST API", "MySQL", "Firebase", "Map Integration"],
    links: [
      { type: "github", url: "#" },
      { type: "demo", url: "#" },
    ],
    features: [
      "Carbon stock data collection in the field",
      "Interactive map integration for area visualization",
      "Real-time data sync via Firebase",
      "User authentication and role management",
      "Cross-platform: Android & iOS",
    ],
  },
  {
    slug: "grow-ecommerce",
    title: "Grow E-Commerce",
    subtitle: "Multi-Province E-Commerce Platform",
    company: "Freelance",
    year: "2022",
    description:
      "A full-featured e-commerce platform for selling goods and services across provinces in Indonesia. Built entirely with Laravel, the system supports product listings, service bookings, inter-provincial shipping, user roles, and integrated payment workflows — all styled with Bootstrap for a clean, responsive interface.",
    image: "/images/grow-platform.png",
    stack: ["Laravel (Fullstack)", "MySQL", "Bootstrap", "Blade Templating", "REST API"],
    links: [
      { type: "github", url: "https://github.com/indrasz/grow-ecommerce" },
    ],
    features: [
      "Product listings and service bookings",
      "Inter-provincial shipping support",
      "Integrated payment workflows",
      "Multi-role user management",
      "Responsive Bootstrap UI",
    ],
  },
];
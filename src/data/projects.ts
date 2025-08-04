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
    slug: "anak-asuh-lazissu",
    title: "Website Anak Asuh Lazissu",
    description:
      "A web-based platform for Lazissu to manage and monitor anak asuh (sponsored children), featuring child profiles, donation tracking, and guardian dashboards. Built with React for a responsive UI and Laravel for secure data handling and API integration.",
    image: "/images/anak-asuh-lazissu.png",
    stack: ["React", "Laravel", "REST API", "MySQL", "Tailwind CSS"],
    links: [
      { type: "github", url: "https://github.com/indrasz/freelance-platform" },
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

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
    slug: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "A personal website built with Next.js 15, Tailwind CSS, and TypeScript to showcase my work and skills.",
    image: "/images/portfolio.png",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Lucide"],
    links: [
      { type: "github", url: "https://github.com/indrasz/portfolio" },
      { type: "demo", url: "https://indrasz.vercel.app" },
    ],
  },
  {
    slug: "freelance-platform",
    title: "Freelance Platform Clone",
    description: "A freelance job board inspired by Projects.co.id with authentication, bidding system, and payment tracking.",
    image: "/images/freelance.png",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    links: [
      { type: "github", url: "https://github.com/indrasz/freelance-platform" },
    ],
  },
];

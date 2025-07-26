import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">🧩 Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/project/${project.slug}`}>
            <div className="rounded-lg shadow hover:shadow-lg transition cursor-pointer bg-white dark:bg-zinc-900 p-4">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
              <p className="text-sm mt-2 text-muted-foreground">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

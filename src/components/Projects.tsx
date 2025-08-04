import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-green-100">🧩 Projects</h1>

      <div className="relative">
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"> 
          <div className="flex gap-6 flex-nowrap">
            {projects.map((project) => (
              <Link 
                key={project.slug} 
                href={`/project/${project.slug}`} 
                className="flex-shrink-0 w-[300px] md:w-[400px] transition-transform hover:scale-[1.02]"
              >
                <div className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-white dark:bg-gray-800 p-4 h-full border border-gray-200 dark:border-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h2 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h2>
                  <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
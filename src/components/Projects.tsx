import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" className="inline-block">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-4">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🧩 Projects</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
          A collection of work across web, mobile, and industrial systems.
        </p>
      </div>

      {/* Horizontal scroll on mobile, 2-col grid on md+ */}
      <div className="overflow-x-auto -mx-4 px-4 pb-4 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0">
        <div className="flex gap-5 flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:flex-none">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/project/${project.slug}`}
              className="flex-shrink-0 w-[280px] sm:w-auto group"
            >
              <div className="h-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                {/* Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Meta: company + year */}
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 truncate max-w-[70%]">
                      {project.company}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 ml-2 flex-shrink-0">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Stack pills — show up to 3 */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-0.5 text-[11px] rounded-full bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
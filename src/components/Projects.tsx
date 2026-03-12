"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { ProjectCardSkeleton } from "@/components/Skeleton";

export default function Projects() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate brief load — replace with real fetch if data becomes async
    const t = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">🧩 Projects</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
            A collection of work across web, mobile, and industrial systems.
          </p>
        </div>

        <div className="overflow-x-auto -mx-4 px-4 pb-4 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 scrollbar-hide">
          <div className="flex gap-5 flex-nowrap sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:flex-none">
            {isLoading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))
              : projects.map((project) => (
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
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-blue-600 dark:text-blue-400 truncate max-w-[70%]">
                            {project.company}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500 ml-2 flex-shrink-0">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 mb-3">
                          {project.subtitle}
                        </p>

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
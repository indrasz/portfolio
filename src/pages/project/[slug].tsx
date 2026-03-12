import { useRouter } from "next/router";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zm0-20H4c-2.208 0-4 1.792-4 4s1.792 4 4 4h4V4zm4 0c-2.208 0-4 1.792-4 4s1.792 4 4 4c2.208 0 4-1.792 4-4s-1.792-4-4-4zm0 16c2.208 0 4-1.792 4-4s-1.792-4-4-4c-2.208 0-4 1.792-4 4s1.792 4 4 4zm4-12c0 2.208 1.792 4 4 4s4-1.792 4-4-1.792-4-4-4h-4v4z" />
  </svg>
);

const linkConfig = {
  github: { label: "GitHub", icon: <GithubIcon />, style: "bg-gray-900 hover:bg-gray-700 text-white dark:bg-gray-700 dark:hover:bg-gray-600" },
  demo:   { label: "Live Demo", icon: <ExternalLinkIcon />, style: "bg-blue-600 hover:bg-blue-700 text-white" },
  figma:  { label: "Figma", icon: <FigmaIcon />, style: "bg-purple-600 hover:bg-purple-700 text-white" },
};

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (typeof slug === "string") {
      const found = projects.find((p) => p.slug === slug);
      setProject(found ?? null);
    }
  }, [slug]);

  if (!slug || !project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
        <div className="animate-pulse text-gray-400 dark:text-gray-500 text-sm">Loading…</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Wahyu Indra</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.image} />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <BackIcon />
          <span>Back to Projects</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-56 sm:h-72 md:h-96 w-full bg-gray-100 dark:bg-gray-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-5 sm:p-8">
            {/* ── Header block ── */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div className="flex-1 min-w-0">
                {/* Company + Year */}
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                    {project.company}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{project.year}</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h1>

                {/* Subtitle */}
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {project.subtitle}
                </p>
              </div>

              {/* Link buttons */}
              {project.links?.length > 0 && (
                <div className="flex flex-wrap gap-2 sm:flex-shrink-0">
                  {project.links.map((link: any, i: number) => {
                    const cfg = linkConfig[link.type as keyof typeof linkConfig] ?? linkConfig.demo;
                    return (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${cfg.style}`}
                      >
                        {cfg.icon}
                        {cfg.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ── Body: two columns on md+ ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Project Details (description) */}
              <div>
                <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Project Details
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Right: Tech Stack + Features */}
              <div className="space-y-7">
                <div>
                  <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.features && (
                  <div>
                    <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-3 pb-2 border-b border-gray-200 dark:border-gray-700">
                      Key Features
                    </h2>
                    <ul className="space-y-2">
                      {project.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                            <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" className="text-green-600 dark:text-green-400">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
import { useRouter } from "next/router";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
// import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";

const BackIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function ProjectDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (typeof slug === "string") {
      const found = projects.find((p) => p.slug === slug);
      setProject(found);
    }
  }, [slug]);

  if (!slug || !project) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-lg text-gray-600 dark:text-gray-400">Loading project details...</div>
    </div>
  );

  return (
    <>
      <Head>
        <title>{project.title} | Wahyu Indra</title>
        <meta name="description" content={project.description} />
        <meta property="og:image" content={project.image} />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => router.back()} 
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <BackIcon />
          <span className="ml-2">Back to Projects</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex space-x-3">
                {project.links.map((link: any, i: number) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${
                      link.type === 'Live Demo' 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200'
                    }`}
                  >
                    {link.type === 'GitHub' ? <GithubIcon /> : <ExternalLinkIcon />}
                    <span className="ml-2">{link.type}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Project Details
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech: string) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.features && (
                  <>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                      Key Features
                    </h2>
                    <ul className="space-y-2">
                      {project.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
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
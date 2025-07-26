import { useRouter } from "next/router";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

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

  if (!slug || !project) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{project.title} | Wahyu Indra</title>
        <meta name="description" content={project.description} />
      </Head>

      <Navbar />

      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <img src={project.image} alt={project.title} className="mb-4 w-full rounded" />

        <p className="mb-6">{project.description}</p>

        <h2 className="text-xl font-semibold mb-2">Tech Stack:</h2>
        <ul className="mb-4 list-disc list-inside">
          {project.stack.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-2">Links:</h2>
        <ul className="list-disc list-inside">
          {project.links.map((link: any, i: number) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {link.type}
              </a>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}

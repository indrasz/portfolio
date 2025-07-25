export default function Projects() {
  const projects = [
    {
      title: 'Freelance Platform',
      description: 'Platform pencarian kerja freelance berbasis Next.js dan Prisma dengan fitur tender dan manajemen proyek.',
      tech: ['Next.js', 'Tailwind', 'Prisma', 'PostgreSQL'],
    },
    {
      title: 'Edu Platform',
      description: 'Aplikasi e-learning interaktif dengan autentikasi, upload video, dan integrasi payment gateway.',
      tech: ['React', 'Firebase', 'Tailwind'],
    },
    {
      title: 'Personal Website',
      description: 'Portfolio ini sendiri! Dibangun dengan Next.js dan dark mode.',
      tech: ['Next.js', 'Tailwind'],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  const skills = [
    { category: "Frontend",  items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend",   items: ["Laravel", "Golang", "Node.js", "REST API"] },
    { category: "Mobile",    items: ["React Native", "Flutter", "Android Jetpack", "Swift"] },
    { category: "Database",  items: ["MySQL", "PostgreSQL", "Firebase", "MongoDB"] },
  ];

  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">👤 About Me</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
            Background, values, and what I bring to a team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bio */}
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            <p>
              I'm a fullstack and mobile developer based in Indonesia, with a track record of building robust, production-ready applications across diverse industries — manufacturing, non-profit, e-commerce, and SaaS.
            </p>
            <p>
              My experience spans building industrial automation dashboards at{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">Diksha Technology</span>, developing a mobile AI meeting assistant for{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">Cerulean Studio (Italy)</span>, and delivering full-cycle freelance projects from concept to deployment.
            </p>
            <p>
              I take pride in writing clean, maintainable code and collaborating closely with stakeholders to turn real-world requirements into reliable software. I'm equally comfortable working solo or as part of a cross-functional team.
            </p>
          </div>

          {/* Skills grid */}
          <div className="space-y-4">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                  {category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
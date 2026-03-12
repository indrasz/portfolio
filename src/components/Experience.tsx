"use client";

import { useState } from "react";
import { experiences } from "@/data/experiences";

const companyColors: Record<string, string> = {
  "Cerulean Studio":          "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  "Diksha Technology":  "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  "Ecodify":                "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
};

const dotColors: Record<string, string> = {
  "Cerulean Studio":          "bg-violet-500",
  "Diksha Technoogy":  "bg-blue-500",
  "Ecodify":                "bg-emerald-500",
};

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="currentColor"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>
);

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  const [open, setOpen] = useState(index === 0); // first card open by default
  const tagClass = companyColors[exp.company] ?? "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600";
  const dot = dotColors[exp.company] ?? "bg-gray-400";

  return (
    <div className="relative pl-8">
      {/* Timeline dot */}
      <span className={`absolute left-0 top-5 w-3 h-3 rounded-full ring-2 ring-white dark:ring-gray-900 ${dot}`} />

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
        {/* Header — always visible, clickable */}
        <button
          onClick={() => setOpen((p) => !p)}
          className="w-full text-left px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
        >
          <div className="flex-1 min-w-0">
            {/* Role + company */}
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${tagClass}`}>
                {exp.company}
              </span>
            </div>

            {/* Period + location + type */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <span>{exp.period}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span>{exp.location}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
              <span className="italic">{exp.type}</span>
            </div>
          </div>

          <ChevronIcon open={open} />
        </button>

        {/* Body — collapsible */}
        {open && (
          <div className="px-5 pb-5 pt-1 border-t border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {exp.description}
            </p>
            <ul className="space-y-2">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400">
                    <CheckIcon />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 dark:bg-gray-900/50 py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">💼 Experience</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm">
            Professional journey across product studios, enterprises, and freelance work.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-5 bottom-5 w-px bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
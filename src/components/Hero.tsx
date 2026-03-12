import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="w-full py-20 sm:py-24 bg-white dark:bg-gray-900 px-6"
      id="hero"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">

          {/* ── Left: Text ── */}
          <div className="flex-1 min-w-0">
            {/* Status badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5 text-gray-900 dark:text-white">
              Hi, I'm Wahyu Indra
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              A{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Fullstack & Mobile Developer
              </span>{" "}
              with hands-on experience building production systems — from
              industrial IoT dashboards for a major footwear manufacturer to a
              cross-platform AI meeting app for an Italian product studio.
            </p>

            <p className="text-base text-gray-500 dark:text-gray-400 mb-10">
              I specialize in React, Next.js, Laravel, Golang, and React Native
              — focused on delivering clean, scalable, and user-centric software.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-block px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition text-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-gray-500 dark:hover:border-gray-400 transition text-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* ── Right: Photo ── */}
          <div className="flex sm:flex-shrink-0 justify-center sm:justify-end">
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 opacity-20 dark:opacity-30 scale-110" />

              {/* Photo circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src="/images/profile.jpeg"
                  alt="Wahyu Indra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section className="w-full py-24 bg-white dark:bg-gray-900 text-center px-6" id="hero">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
          Hi, I'm Wahyu Indra 👋
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
          A Fullstack Developer specializing in building modern web and mobile applications using technologies like React, Next.js, Laravel, and Flutter.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

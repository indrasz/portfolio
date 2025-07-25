export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Wahyu Indra. All rights reserved.</p>
        <div className="mt-2 sm:mt-0 flex space-x-4">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:email@example.com"
            className="hover:text-black dark:hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

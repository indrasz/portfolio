export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Interested in working together or just want to say hello?
        </p>
        <a
          href="mailto:wahyuindra712@gmail.com"
          className="inline-block px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}
// const Navbar = () => {
//     return (
//         <>
            
//         </>
//     )
// }

// export default Navbar;
// import { ThemeProvider } from "@/components/ThemeProvider"
import Link from 'next/link';
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg text-gray-900 dark:text-white">wahyuindra.dev</h1>
        <nav className="space-x-6 text-gray-700 dark:text-gray-300">
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

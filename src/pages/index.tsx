import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Wahyu Indra — Fullstack & Mobile Developer</title>
        <meta
          name="description"
          content="Portfolio of Wahyu Indra — Fullstack & Mobile Developer specializing in React, Next.js, Laravel, Golang, and React Native."
        />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Wahyu Indra — Software Engineer | Web & Mobile Specialist</title>
                <meta name="description" content="Portfolio pribadi Wahyu Indra: fullstack developer spesialis React, Vue, Laravel, Kotlin, & Flutter" />
            </Head>
            <Navbar />
            <main>
                <Hero />
                <Projects />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
import Image from "next/image";
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeProvider } from "@/components/ThemeProvider"

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Wahyu Indra — Frontend Developer</title>
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
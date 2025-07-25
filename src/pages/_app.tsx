import type { AppProps } from 'next/app';
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from 'react';
import { ThemeProvider } from "@/components/ThemeProvider"
import '../globals.css';



const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {

    return (
        <body className="bg-background text-foreground font-sans transition-colors duration-300">
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Component {...pageProps} />
            </ThemeProvider>
        </body>
    )

}
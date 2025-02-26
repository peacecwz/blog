import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@web/app/components/header.component";
import React from "react";
import { Footer } from "@web/app/components/footer.component";
import Script from 'next/script';
import dynamic from 'next/dynamic';

// Import the SponsoredAd component with dynamic import to ensure it only runs on the client side
const SponsoredAd = dynamic(() => import('./components/SponsoredAd'), { ssr: false });

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Baris Ceviz</title>
                <meta property="og:title" content="Baris Ceviz" />
                <meta property="og:description"
                    content="As a hacker who's passionate about development and build, I have been building digital products for more than 7 years." />
                <meta property="og:image" content="https://barisceviz.com/profile.jpeg" />
                <meta property="og:url" content="https://barisceviz.com/" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@peacecwz" />
                <meta name="twitter:title" content="Baris Ceviz" />
                <meta name="twitter:description"
                    content="As a hacker who's passionate about development and build, I have been building digital products for more than 7 years." />
                <meta name="twitter:image" content="https://barisceviz.com/profile.jpeg" />

                <link rel="stylesheet" type="text/css" href="https://widgets.superpeer.com/widget.css"></link>
                <Script src="https://widgets.superpeer.com/widget.js" />
                <Script id='superpeer-widget'>
                    {`window.addEventListener("load", () => {new Superpeer.Widget({embed:{type:"slide-in"},launcher:{type:"superpeer-logo",options:{}},config:{username:"peacecwz",serviceSlug:""}})})`}
                </Script>
            </head>
            <body className="flex flex-col sm:min-h-screen">
                <Header />
                <main className="py-6">
                    {children}
                </main>
                <SponsoredAd />
                <Footer />
            </body>
        </html>
    )
}

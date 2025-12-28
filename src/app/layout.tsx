import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from 'next-view-transitions'
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const geist = Geist({
//   subsets: ["latin"]
// })

export const metadata: Metadata = {
  title: "Salman Najah | Portfolio",
  description: "Portfolio of Salman Najah, a web developer and software engineer specializing in Next.js, React, and modern web technologies.",
  keywords: [
    "Salman Najah",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
    "UI/UX",
    "Personal Website"
  ],
  metadataBase: new URL("https://salmannajah.me"),
  openGraph: {
    title: "Salman Najah | Portfolio",
    description: "Portfolio of Salman Najah, a web developer and software engineer specializing in Next.js, React, and modern web technologies.",
    url: "https://salmannajah.me",
    siteName: "Salman Najah Portfolio",
    images: [
      {
        url: "/opengraph-image-v2.png",
        width: 1200,
        height: 630,
        alt: "Salman Najah Portfolio Open Graph Image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Salman Najah | Portfolio",
    description: "Portfolio of Salman Najah, a web developer and software engineer specializing in Next.js, React, and modern web technologies.",
    site: "@slmntwt",
    creator: "@slmntwt",
    images: ["/opengraph-image-v2.png"]
  },
  alternates: {
    canonical: "https://salmannajah.me"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-neutral-100 dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
    </ViewTransitions>
  );
}

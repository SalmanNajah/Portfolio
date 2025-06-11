import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/navbar/mobile";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Salman Najah | Portfolio",
  description: "Portfolio of Salman Najah, a web developer and software engineer specializing in Next.js and React.",
  // Add keywords for better SEO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-neutral-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

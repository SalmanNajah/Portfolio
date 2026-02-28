"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Geist_Mono } from "next/font/google";
import Container from "./container";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const istFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const getIstTime = () => istFormatter.format(new Date());

const MainLanding = () => {
  const [istTime, setIstTime] = useState(getIstTime);

  useEffect(() => {
    const id = setInterval(() => {
      setIstTime(getIstTime);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Container>
        <section className="relative overflow-hidden bg-container -mx-4 md:-mx-10">
          <div className="hero-cover-abstract w-full aspect-[16/9] md:aspect-[16/4]" />

          <div className="absolute left-6 md:left-14 top-32 flex items-center">
            <div className="rounded-full border border-neutral-200/80 bg-white/95 p-1 dark:bg-neutral-900/95 dark:border-neutral-700/80">
              <Image
                src="/avatar.png"
                alt="Salman Najah"
                width={180}
                height={180}
                className="h-28 w-28 md:h-40 md:w-40 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="px-4 md:px-10 pb-6 md:pb-8 pt-2 md:pt-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-10">
              <div className="mt-10 md:mt-16">
                <h1
                  className={`${geistMono.className} text-3xl md:text-4xl font-medium tracking-tight text-primary dark:text-white`}
                >
                  Salman Najah
                </h1>
                <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Software Developer
                </p>
                <p className="mt-2 max-w-xl text-sm text-black dark:text-white leading-relaxed">
                I build web applications and actively contribute to open source.
                <br />
                Working with TypeScript, React, Next.js, and backend systems.
                <br />
                Exploring Solana.
                </p>
              </div>

              <div className="mt-0 md:mt-2 flex flex-row md:flex-col items-center md:items-end md:gap-38 gap-22">
                <div className="flex gap-2">
                  <a
                    href="https://github.com/salmannajah"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white/80 text-neutral-700 transition hover:border-neutral-400 dark:border-neutral-700/70 dark:bg-neutral-900/80 dark:text-neutral-100 dark:hover:border-neutral-400"
                  >
                    <IconBrandGithub className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/salmannajah"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white/80 text-neutral-700 transition hover:border-neutral-400 dark:border-neutral-700/70 dark:bg-neutral-900/80 dark:text-neutral-100 dark:hover:border-neutral-400"
                  >
                    <IconBrandLinkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://x.com/slmntwt"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200/80 bg-white/80 text-neutral-700 transition hover:border-neutral-400 dark:border-neutral-700/70 dark:bg-neutral-900/80 dark:text-neutral-100 dark:hover:border-neutral-400"
                  >
                    <IconBrandX className="h-4 w-4" />
                  </a>
                </div>
                {istTime && (
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className={`${geistMono.className} text-sm text-neutral-500 dark:text-neutral-400`}>
                      {istTime} IST
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default MainLanding;
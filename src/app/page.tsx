"use client";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Projects from "@/components/ui/projects";
import dynamic from "next/dynamic";
import LandingBlogs from "@/components/landing-blog/landing-blog";
const GithubGraph = dynamic(() => import("@/components/ui/github"), {
  ssr: false,
});
// SSR is disabled for this component because of the hydration issue with the ActivityCalendar component.
// SSR Enabled solution is there in Urgent Bookmark(chrome) - implement that later if needed(By creating a server component for the graph and passing the data as props to the client component).

export default function Home() {
  return (
    <div>
      <Container className="z-10 relative min-h-full pt-30 flex flex-col md:flex-row md:justify-between pb-8 border-b-1 border-neutral-200 dark:border-neutral-700">
        <motion.div
          className="order-1 md:order-2 mb-4 md:mb-0 flex justify-start md:justify-start"
          initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Link href="/">
            <Image src="/avatar.png" alt="Logo" width={150} height={150} className="rounded-xl object-cover border-secondary border w-32 h-32 md:w-48 md:h-48" />
          </Link>
        </motion.div>
        <div
          className="order-2 md:order-1">

          <motion.h1 initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary dark:text-white tracking-tight flex justify-self-start md:justify-self-start">
            Salman Najah
          </motion.h1>

          <motion.p initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-500 dark:text-neutral-400 font-light pt-4 text-sm md:text-base max-w-84 flex justify-self-start md:max-w-md">
            21, I build things, break stuff, and figure it out as I go. Deep into web, systems, and anything that scales or sparks curiosity. Obsessed with clean builds, clever tools, and ideas that stick. Still learning, still building.
          </motion.p>
        </div>
      </Container>
      <Projects />
      <GithubGraph username="Salman-in" blockMargin={2} />
      <LandingBlogs />
    </div>
  );
}

//For github graph color pallete
// colorPallete={["#000000", "#2c2c2c", "#595959", "#a6a6a6", "#e0e0e0"]} looks good in dark mode
// colorPallete={["#ffffff", "#d9d9d9", "#b3b3b3", "#808080", "#404040"]} //looks good in light mode

// TODO
// 1. complete the basic skeleton by video reference
// 2. then add that git graph
// 3. then styling on my own
// 4. fix the dark mode toggle buttonppp
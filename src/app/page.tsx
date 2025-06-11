"use client";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Projects from "@/components/projects";
import Blog from "@/components/blog";
export default function Home() {
  return (
    <div>
      <Container className="z-10 relative min-h-full pt-30 flex flex-col md:flex-row md:justify-between pb-8 border-b border-neutral-200 dark:border-neutral-700 ">
        <motion.div
          className="order-1 md:order-2 mb-4 md:mb-0 flex justify-start md:justify-start"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/">
            <Image src="/avatar.png" alt="Logo" width={150} height={150} className="rounded-xl object-cover border-secondary border w-32 h-32 md:w-48 md:h-48" />
          </Link>
        </motion.div>
        <div
          className="order-2 md:order-1">

          <motion.h1 initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-primary dark:text-white tracking-tight flex justify-self-start md:justify-self-start">
            Salman Najah
          </motion.h1>

          <motion.p initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="text-neutral-500 dark:text-neutral-400 font-light pt-4 text-sm md:text-base max-w-84 flex justify-self-start md:max-w-md">
            21, I build things, break stuff, and figure it out as I go. Deep into web, systems, and anything that scales or sparks curiosity. Obsessed with clean builds, clever tools, and ideas that stick. Still learning, still building.
          </motion.p>
        </div>
      </Container>
      <Projects />
      <Blog />
    </div>
  );
}

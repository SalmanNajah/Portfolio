"use client";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
    <Container className="min-h-full pt-30 flex flex-col md:flex-row md:justify-between pb-8">
      <motion.div
        className="order-1 md:order-2 mb-4 md:mb-0 flex justify-center md:justify-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/">
          <Image src="/avatar.png" alt="Logo" width={150} height={150} className="rounded-2xl object-cover" />
        </Link>
      </motion.div>
      <motion.div
        className="order-2 md:order-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>

        <motion.h1 initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-primary tracking-tight flex justify-self-center md:justify-self-start">
          Salman Najah
        </motion.h1>

        <motion.p initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-secondary pt-4 text-sm md:text-base max-w-64 flex justify-self-center md:max-w-md">
          21, I build things, break stuff, and figure it out as I go.
          Deep into web, systems, and anything that scales or sparks curiosity.
          Obsessed with clean builds, clever tools, and ideas that stick.
          Still learning, still building.
        </motion.p>
      </motion.div>
    </Container>
    <Projects />
    </div>
  );
}

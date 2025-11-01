"use client";
import React from 'react'
import Container from './container'
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import Designation from './designation';
import { IBM_Plex_Mono } from 'next/font/google'

const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MainLanding = () => {
  return (
    <div>
      <Container className='pt-30'>
        <div className="z-10 relative min-h-full flex flex-col md:flex-row md:justify-between pb-8">
          <motion.div
            className="order-1 md:order-2 mb-4 md:mb-0 flex justify-start md:justify-start"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Link href="/" className='p-2 border-1 border-color-new bg-side-header'>
              <Image src="/avatar.png" alt="Logo" width={150} height={150} className="rounded-xl object-cover border-secondary border w-32 h-32 md:w-48 md:h-48" />
            </Link>
          </motion.div>
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <div className='flex flex-col gap-2'>
              <div>
                <div className={`hidden md:block text-xs justify-self-end pr-2 text-secondary ${ibmPlex.className}`}>text-5xl tracking-tighter</div>
                <div className={`md:hidden text-xs justify-self-end pr-2 text-secondary ${ibmPlex.className}`}>text-3xl tracking-tighter</div>
                <motion.h1
                  initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="md:order-1 order-2 text-3xl md:text-5xl font-semibold text-primary dark:text-white tracking-tighter flex md:justify-self-start border-1 border-dashed border-color-new mx-auto w-full track">
                  Salman Najah
                  <CornerArtifacts />
                </motion.h1>
              </div>
              <div className='flex flex-row gap-2 md:order-2 order-1 my-2 md:mt-4'>
                <Designation designation="OSS Contributor" />
                <Designation designation="Web Developer" />
              </div>
            </div>

            <motion.p initial={{ opacity: 0, filter: "blur(8px)", y: -20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-neutral-500 md:text-base pt-4 max-w-90 flex justify-self-start md:max-w-lg">
              I’m 21. I tinker with code, break stuff more than I should, and learn by putting it back together.
            </motion.p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MainLanding
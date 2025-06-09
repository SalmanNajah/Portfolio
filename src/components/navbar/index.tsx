"use client"
import React, { useState } from 'react'
import Container from '../container'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const [hovered, setHovered] = useState<null | number>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const navItems = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'About',
      href: '/about'
    },
    {
      title: 'Projects',
      href: '/projects'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: 'Contact',
      href: '/contact'
    }
  ]

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav className="z-50 md:fixed md:inset-x-0 md:top-0 md:max-w-4xl md:mx-auto flex items-center justify-between md:py-4 rounded-full px-6 mt-2 backdrop-blur-md bg-white/30 dark:bg-zinc-900/30"
        animate={{
          boxShadow: scrolled ? "var(--shadow-derek)" : "none",
          width: scrolled ? "50%" : "60%",
          y: scrolled ? 5 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div>
          dark
        </div>
        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link href={item.href} key={idx} className='relative text-sm px-4 py-2'
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (<motion.span layoutId='hovered-span' className='h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-700'></motion.span>)}
              <span className='relative z-10'>{item.title}</span>
            </Link>
          ))}
        </div>

      </motion.nav>
    </Container>
  )
}

export default Navbar
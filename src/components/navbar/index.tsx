"use client"
import React, { useState } from 'react'
import Container from '../container'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { IconX } from '@tabler/icons-react'
import DarkModeToggle from '../darkmode'
import Hamburger from '../hamburger'
import MobileNavbar from './mobile'

const Navbar = () => {
  const [hovered, setHovered] = useState<null | number>(null)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { scrollY } = useScroll()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' }
  ]

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <>
      <Container>
        {!isOpen && (
          <motion.div
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden flex justify-between items-center px-4 backdrop-blur-md bg-white/30 dark:bg-zinc-900/30 p-3 rounded-2xl shadow-standard"
            initial={{ boxShadow: "none", width: "100%", y: 0 }}
            animate={{
              boxShadow: scrolled ? "var(--shadow-derek)" : "none",
              width: scrolled ? "90%" : "100%",
              y: scrolled ? 5 : 0,
            }}
          >
            <DarkModeToggle />
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </Container>

      <Container>
        <motion.nav
          className="hidden max-w-lg z-50 fixed md:inset-x-0 md:top-0 md:max-w-4xl md:mx-auto md:flex items-center justify-between md:py-4 rounded-full px-6 mt-2 backdrop-blur-md bg-white/30 dark:bg-zinc-900/30"
          animate={{
            boxShadow: scrolled ? "var(--shadow-derek)" : "none",
            width: scrolled ? "50%" : "60%",
            y: scrolled ? 5 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <DarkModeToggle />
          <div className="flex items-center">
            {navItems.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                className="relative text-sm px-4 py-2"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === idx && (
                  <motion.span
                    layoutId="hovered-span"
                    className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-700"
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </Link>
            ))}
          </div>
        </motion.nav>
      </Container>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center gap-6 transition-all duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6">
            <IconX className="w-6 h-6 text-black dark:text-white" />
          </button>
          <MobileNavbar setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  )
}

export default Navbar

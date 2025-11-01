"use client"
import React, { useState, useEffect } from 'react'
import Container from '../container'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { IconX } from '@tabler/icons-react'
import DarkModeToggle from '../darkmode'
import Hamburger from '../hamburger'
import MobileNavbar from './mobile'
import { Link } from 'next-view-transitions'
// import Link from 'next/link'

const Navbar = () => {
  const [hovered, setHovered] = useState<null | number>(null)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { scrollY } = useScroll()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    // { title: 'Blog', href: '/blog' },
    // { title: 'Resources', href: '/resources' } //temporarily disabled until its complete
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <>
      <Container>
        {!isOpen && (
          <motion.div
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden flex justify-between items-center px-4 backdrop-blur-md bg-white/10 dark:bg-neutral-900/10 p-3 rounded-2xl"
            initial={{ boxShadow: "none", width: "100%", y: 0 }}
            animate={{
              boxShadow: scrolled ? "var(--shadow-derek)" : "none",
              width: scrolled ? "90%" : "100%",
              y: scrolled ? 5 : 0,
              backgroundColor: scrolled ? "bg-white/10 dark:bg-neutral-900/10" : "transparent",
            }}
          >
            <DarkModeToggle />
            <Hamburger setIsOpen={setIsOpen} />
          </motion.div>
        )}
      </Container>

      {mounted && (
        <Container>
          <motion.nav
            className="hidden max-w-lg z-50 fixed md:inset-x-0 md:top-0 md:max-w-4xl md:mx-auto md:flex items-center justify-between md:py-3 rounded-full px-4 mt-2 backdrop-blur-md bg-white/30 dark:bg-neutral-900/30"
            animate={{
              boxShadow: scrolled ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset" : "none",
              width: scrolled ? "30%" : "60%",
              y: scrolled ? 7 : 0,
              borderRadius: scrolled ? "5rem" : "2rem",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <DarkModeToggle />
            <div className="flex">
              {navItems.map((item, idx) => (
                <Link
                  href={item.href}
                  key={idx}
                  className="relative text-sm px-3 py-2"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {hovered === idx && (
                    <motion.span
                      layoutId="hovered-span"
                      className="h-full w-full absolute inset-0 rounded-md bg-neutral-300/50 dark:bg-neutral-800/50"
                    />
                  )}
                  <span className="relative z-10">{item.title}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        </Container>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-md dark:bg-zinc-900/80 flex flex-col items-center justify-center gap-6 transition-all duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-6">
            <IconX className="w-6 h-6 text-black dark:text-white" />
          </button>
          <MobileNavbar setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  )
}

export default Navbar
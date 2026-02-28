"use client"
import React, { useState, useEffect } from 'react'
import Container from '../container'
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { Link } from 'next-view-transitions'
import DarkModeToggle from '../darkmode'
// import Link from 'next/link'

const Navbar = () => {
  const [hovered, setHovered] = useState<null | number>(null)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const { scrollY } = useScroll()
  const [mounted, setMounted] = useState(false)

  const navItems = [
    { title: 'Home', href: '/' },
    // { title: 'About', href: '/about' },
    { title: 'Projects', href: '#projects' },
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
      {mounted && (
        <>
          <Container>
            <motion.nav
              className="md:hidden fixed inset-x-0 top-0 z-50 mx-2"
              initial={{ y: -32, opacity: 0 }}
              animate={{
                y: scrolled ? 8 : 0,
                opacity: 1,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mx-auto flex max-w-4xl items-center justify-between px-2 pt-2">
                <motion.div
                  className="flex w-full items-center justify-between px-4 py-3 rounded-full backdrop-blur-md bg-white/30 dark:bg-neutral-900/30"
                  animate={{
                    boxShadow: scrolled
                      ? "var(--shadow-standard)"
                      : "0 1px 0 rgba(148,163,184,0.20)",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <DarkModeToggle />
                  </div>
                  <div className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-200">
                    {navItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="hover:text-neutral-900 dark:hover:text-white"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          </Container>


          <Container>
            <motion.nav
              className="hidden max-w-lg z-50 fixed md:inset-x-0 md:top-0 md:max-w-4xl md:mx-auto md:flex items-center justify-between md:py-3 rounded-full px-4 mt-2 backdrop-blur-md bg-white/30 dark:bg-neutral-900/30"
              animate={{
                boxShadow: scrolled
                  ? "var(--shadow-standard)"
                  : "0 1px 0 rgba(148,163,184,0.20)",
                width: "30%",
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
                        className="h-full w-full absolute inset-0 rounded-full border border-white/20 bg-white/40 backdrop-blur-md dark:border-white/10 dark:bg-neutral-800/40"
                      />
                    )}
                    <span className="relative z-10">{item.title}</span>
                  </Link>
                ))}
              </div>
            </motion.nav>
          </Container>
        </>
      )}

    </>
  )
}

export default Navbar
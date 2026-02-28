'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [wobble, setWobble] = useState(0)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    setWobble(prev => prev + 1)
    const audio = new Audio("/click.mp3");
    audio.volume = 0.5;
    audio.play();
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-black dark:text-white cursor-pointer rounded-full p-2 transition-all duration-300 ease-in-out hover:shadow-standard"
      aria-label="Toggle dark mode"
    >
      <motion.div
        key={wobble}
        initial={{ rotate: 10 }}
        animate={{ rotate: -10 }}
        transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
        className="flex items-center justify-center"
      >
        {resolvedTheme === 'dark' ? (
          <IconSun className="w-5 h-5 transition-opacity duration-200" />
        ) : (
          <IconMoon className="w-5 h-5 transition-opacity duration-200" />
        )}
      </motion.div>
    </button>
  )
}

export default DarkModeToggle

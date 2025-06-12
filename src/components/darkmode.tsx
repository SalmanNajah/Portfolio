'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'

const DarkModeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null 
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    setRotation((prev) => prev + (prev % 360 === 0 ? 180 : -180))
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-black dark:text-white cursor-pointer rounded-full shadow-standard p-2 transition-all duration-300 ease-in-out hover:scale-105"
      aria-label="Toggle dark mode"
    >
      <motion.div
        animate={{ rotate: rotation }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
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

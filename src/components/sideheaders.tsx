"use client"
import React from 'react'
import { motion } from 'motion/react'

const SideHeaders = ({children} : {children: React.ReactNode}) => {
  return (
    <motion.div
        className="relative inline-block text-base mb-6 bg-neutral-200/70 dark:bg-neutral-400/70 text-neutral-600 dark:text-neutral-900  px-2 py-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.5 }}>
          {children}
          <div className="absolute top-0 left-0 w-[6px] h-[7px] rounded-full bg-neutral-500/40 dark:bg-neutral-300/40 -translate-x-1 -translate-y-1" />
          <div className="absolute top-0 right-0 w-[6px] h-[7px] rounded-full bg-neutral-500/40 dark:bg-neutral-300/40 translate-x-1 -translate-y-1" />
          <div className="absolute bottom-0 left-0 w-[6px] h-[6px] rounded-full bg-neutral-500/40 dark:bg-neutral-300/40 -translate-x-1 translate-y-1" />
          <div className="absolute bottom-0 right-0 w-[6px] h-[6px] rounded-full bg-neutral-500/40 dark:bg-neutral-300/40 translate-x-1 translate-y-1" />
    </motion.div>
  )
}

export default SideHeaders
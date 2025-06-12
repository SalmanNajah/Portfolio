"use client"
import React from 'react'
import { motion } from 'motion/react'

const SideHeaders = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="relative inline-block text-base mb-6 bg-neutral-200/70 dark:bg-neutral-700/70 text-neutral-600 dark:text-neutral-500 font-medium px-2 py-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.5 }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute -top-[2px] -left-[2px] w-[6px] h-[6px] rounded-full bg-neutral-500/40 dark:bg-neutral-300/40 z-0" />
      <div className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] rounded-full bg-neutral-500/40 dark:bg-neutral-300/40 z-0" />
      <div className="absolute -bottom-[2px] -left-[2px] w-[6px] h-[6px] rounded-full bg-neutral-500/40 dark:bg-neutral-300/40 z-0" />
      <div className="absolute -bottom-[2px] -right-[2px] w-[6px] h-[6px] rounded-full bg-neutral-500/40 dark:bg-neutral-300/40 z-0" />
    </motion.div>
  );
};



export default SideHeaders
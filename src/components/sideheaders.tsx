"use client"
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils';

const SideHeaders = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      className={cn("relative inline-block text-base m-2 bg-neutral-200/70 dark:bg-neutral-700/30 text-neutral-600 dark:text-neutral-300 font-medium py-0.5 px-1", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.5 }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute -top-[2px] -left-[2px] w-[5px] h-[5px] rounded-full bg-neutral-500/30 dark:bg-neutral-300/20 z-0" />
      <div className="absolute -top-[2px] -right-[2px] w-[5px] h-[5px] rounded-full bg-neutral-500/30 dark:bg-neutral-300/20 z-0" />
      <div className="absolute -bottom-[2px] -left-[2px] w-[5px] h-[5px] rounded-full bg-neutral-500/30 dark:bg-neutral-300/20 z-0" />
      <div className="absolute -bottom-[2px] -right-[2px] w-[5px] h-[5px] rounded-full bg-neutral-500/30 dark:bg-neutral-300/20 z-0" />
    </motion.div>
  );
};

export default SideHeaders
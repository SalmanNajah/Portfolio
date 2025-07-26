"use client"
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils';

const SideHeaders = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("relative inline-block m-2", className)}>
      <motion.div
        className="absolute inset-0 bg-neutral-200/70 dark:bg-neutral-700/30 z-0 animate-pulse"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.9 }}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}
        className="relative z-10 text-base text-neutral-600 dark:text-neutral-300 font-medium py-0.5 px-1">
        {children}
      </motion.span>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="absolute animate-pulse -top-[2px] -left-[2px] w-[5px] h-[5px] rounded-full bg-neutral-500/30 dark:bg-neutral-300/20 z-10" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="absolute animate-pulse -top-[2px] -right-[2px] w-[5px] h-[5px] rounded-full bg-neutral-500/30 dark:bg-neutral-300/20 z-10" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="absolute animate-pulse -bottom-[2px] -left-[2px] w-[5px] h-[5px] rounded-full bg-neutral-500/30 dark:bg-neutral-300/20 z-10" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="absolute animate-pulse -bottom-[2px] -right-[2px] w-[5px] h-[5px] rounded-full bg-neutral-500/30 dark:bg-neutral-300/20 z-10" />
    </div>
  );
};

export default SideHeaders
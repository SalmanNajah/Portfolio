"use client"
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils';

const SideHeaders = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("relative border-1 border-dashed border-color-new max-w-4xl mx-auto bg-container", className)}>
      <div className='inline-block border-x-1 ml-6 md:ml-10 p-2 border-dashed border-color-new bg-side-header'>{children}</div>
    </div>
  );
};

export default SideHeaders;
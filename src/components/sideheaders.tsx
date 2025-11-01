"use client"
import React from 'react'
import { cn } from '@/lib/utils';
import { IBM_Plex_Mono } from 'next/font/google';
import Container from './container';


const ibmPlex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const SideHeaders = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <>
      <Container className={`border-t text-xs flex justify-end items-end pr-2 text-secondary bg-container ${ibmPlex.className}`}>border-1 border-dashed</Container>
      <div className={cn("relative border-1 border-dashed border-color-new max-w-4xl mx-auto bg-container bg-[repeating-linear-gradient(-45deg,_#d4d4d4_0,_#d4d4d4_1px,_transparent_1px,_transparent_4px)] dark:bg-[repeating-linear-gradient(-45deg,_#262626_0,_#262626_1px,_transparent_1px,_transparent_4px)]", className)}>
        <div className='inline-block border-x-1 ml-6 md:ml-10 p-2 border-dashed border-color-new bg-side-header font-semibold'>{children}</div>
      </div>
    </>
    
  );
};

export default SideHeaders;
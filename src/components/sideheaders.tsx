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
      <div className={cn("relative border-1 border border-color-new max-w-4xl mx-auto bg-container bg-[repeating-linear-gradient(-45deg,_#e5e5e5_0,_#e5e5e5_1px,_transparent_1px,_transparent_8px)] dark:bg-[repeating-linear-gradient(-45deg,_#303030_0,_#303030_1px,_transparent_1px,_transparent_8px)]", className)}>
        <div className='inline-block border-x-1 ml-6 md:ml-10 p-2 border-color-new bg-side-header font-semibold'>{children}</div>
      </div>
    </>
    
  );
};

export default SideHeaders;
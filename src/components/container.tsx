import { cn } from '@/lib/utils';
import React from 'react'

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return (
        <>
            <div className={cn("dark:bg-neutral-900 max-w-lg md:max-w-4xl w-full mx-auto bg-white px-4 md:px-10 min-h-full", className)}>{children}</div>
        </>
    )
}

export default Container;
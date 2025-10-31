import { cn } from '@/lib/utils';
import React from 'react'

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return (
        <>
            <div className={cn("max-w-lg md:max-w-4xl w-full mx-auto bg-container px-4 md:px-10 min-h-full border-x border-color-new", className)}>{children}</div>
        </>
    )
}

export default Container;
import { cn } from '@/utils/cn';
import React from 'react';

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <button
            type="button"
            className={cn(
                'bg-primary rounded-xl h-[57px] text-white text-lg flex items-center justify-center px-8 py-[18px]',
                className
            )}>
            {children}
        </button>
    );
}

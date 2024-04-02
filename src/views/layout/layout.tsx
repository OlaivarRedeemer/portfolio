import Navbar from '@/components/navbar';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="">
            <Navbar />
            <div className="w-full text-primary-text">
                <div className="w-full max-w-[1112px] mx-auto">{children}</div>
            </div>
        </div>
    );
}

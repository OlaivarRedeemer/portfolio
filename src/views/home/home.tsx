import React from 'react';
import HeroSection from '../../components/home/hero';
import WorkSection from '@/components/home/work';

export default function HomePage() {
    return (
        <div className="w-full space-y-10 md:space-y-[150px]">
            <HeroSection />
            <WorkSection />
        </div>
    );
}

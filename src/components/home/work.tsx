import React from 'react';
import WorkCard from './work-card';
import { workSectionContent } from '@/contents/home';
import WorkCardAlt from './work-card-alt';

export default function WorkSection() {
    return (
        <div className="sm=px-[64px]">
            <h1 className="px-[30px] sm=px-0 text-4xl text-primary mb-[50px]">Work</h1>
            <div id="work-cards" className="space-y-10 sm=space-y-[150px]">
                {workSectionContent.map((item, index) => {
                    return <WorkCard key={index} {...item} />;
                })}
                <WorkCardAlt
                    title="Dwellu"
                    description="Designing a website of a startup that helps property seekers find the right property."
                    image="/assets/images/works/dazle-1.png"
                    bgClass="bg-[#4B788C] rounded-none sm:rounded-3xl"
                    titleClass="text-white"
                    descriptionClass="text-secondary-text"
                    buttonClass="text-white"
                    url="/"
                />
            </div>
        </div>
    );
}

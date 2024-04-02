import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { IWorkCard } from '@/lib/types';

export default function WorkCard({
    title,
    description,
    image,
    url = '/',
    bgClass,
    shadowClass,
    titleClass,
    buttonClass,
    descriptionClass,
    reversed = false,
}: IWorkCard) {
    return (
        <div
            className={cn(
                `bg-[#102F52] flex flex-col-reverse ${
                    reversed ? '1100px:flex-row-reverse' : '1100px:flex-row'
                } items-center 1100px:items-end justify-between rounded-3xl gap-8 p-[30px] sm:p-[50px] md:p-[70px]`,
                bgClass
            )}>
            <div id="heading" className="space-y-[20px] sm:space-y-[30px]">
                <div className="space-y-[20px] sm:space-y-[30px] w-full 1100px:max-w-[345px]">
                    <h1 className={cn('font-europa text-4xl sm:text-5xl text-white', titleClass)}>{title}</h1>
                    <p className={cn('text-lg sm:text-[24px] text-secondary-text font-light', descriptionClass)}>
                        {description}
                    </p>
                </div>
                <div>
                    <Link href={url}>
                        <Button variant="faded-white" className={cn('w-full sm:w-fit', buttonClass)}>
                            View Case Study
                        </Button>
                    </Link>
                </div>
            </div>
            <img
                src={image}
                alt={title}
                className={cn(
                    'w-full 1100px:w-auto 1100px:h-full 1200px:shrink-0 shadow-[0px_4px_50px_0px#071C34] overflow-hidden',
                    shadowClass
                )}
            />
        </div>
    );
}

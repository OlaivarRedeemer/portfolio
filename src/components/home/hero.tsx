import { Button } from '@/components/ui/button';
import WithPadding from '@/views/layout/with-padding';
import React from 'react';

export default function HeroSection() {
    return (
        <WithPadding>
            <div className="flex flex-col-reverse 900px:flex-row items-center justify-between gap-1">
                <div id="heading" className="space-y-[25px] 900px:max-w-[500px]">
                    <div className="space-y-[15px]">
                        <h1 className="font-europa text-4xl sm:text-5xl text-primary">
                            Hello, I&#39;m Redeemer: <br /> A UI/UX Designer
                        </h1>
                        <p className="text-lg sm:text-xl">
                            I&#39;m a passionate UI/UX designer driven by creating intuitive and user-friendly
                            experiences. I specialized in clean and minimalist designs.
                        </p>
                    </div>
                    <Button className="w-full sm:w-fit">Let&#39;s Chat</Button>
                </div>
                <div id="hero-image" className="h-full shrink-0">
                    <img src="/assets/images/hero-image.png" alt="Redeemer Olaivar" className="w-full" />
                </div>
            </div>
        </WithPadding>
    );
}

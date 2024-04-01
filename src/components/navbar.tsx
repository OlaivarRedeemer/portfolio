'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="sticky z-[100] top-0 left-0 w-full flex items-center justify-between h-[80px] px-[30px] sm:px-10 py-2 bg-white">
            <div id="logo">
                <h1 className="font-europa text-2xl text-primary">Redeemer Olaivar</h1>
            </div>
            <div id="menu" className="hidden 900px:flex items-center gap-[50px] h-full cursor-pointer ">
                <p className="font-light text-sm text-primary-text hover:text-primary">Work</p>
                <p className="font-light text-sm text-primary-text hover:text-primary">Resume</p>
                <Button variant="secondary">Let's chat</Button>
            </div>
            <div id="mobile-menu" className="900px:hidden">
                <Sheet modal={false} open={open} onOpenChange={setOpen}>
                    <SheetTrigger className="cursor-pointer">
                        {open ? (
                            <img src="/assets/icons/hamburger-x.svg" alt="hamburger-menu-x" className="h-full" />
                        ) : (
                            <img src="/assets/icons/hamburger.svg" alt="hamburger-menu" className="h-full" />
                        )}
                    </SheetTrigger>
                    <SheetContent side="top" className="pt-[80px] px-[30px] sm:px-10">
                        <div id="mobile-menu" className="flex flex-col justify-center gap-8 cursor-pointer ">
                            <p className="font-normal text-sm text-primary-text hover:text-primary">Work</p>
                            <p className="font-normal text-sm text-primary-text hover:text-primary">Resume</p>
                            <Button variant="secondary">Let's chat</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

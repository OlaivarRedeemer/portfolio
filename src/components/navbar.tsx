import React from 'react';
import Button from './button';

export default function Navbar() {
    return (
        <div className="sticky top-0 left-0 w-full flex items-center justify-between h-[80px] px-[30px] sm:px-10 py-2 bg-white">
            <div id="logo">
                <h1 className="font-europa text-2xl">Redeemer Olaivar</h1>
            </div>
            <div id="menu" className="flex items-center gap-[50px] h-full cursor-pointer">
                <p className="font-light text-sm text-primary-text hover:text-primary">Work</p>
                <p className="font-light text-sm text-primary-text hover:text-primary">Resume</p>
                <Button className="h-10 px-6 py-3 text-sm">Let's chat</Button>
            </div>
        </div>
    );
}

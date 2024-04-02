import React from 'react';

interface WithPaddingProps {
    children: React.ReactNode;
}

export default function WithPadding({ children }: WithPaddingProps) {
    return <div className="px-[30px] sm:px-[64px]">{children}</div>;
}

import React from "react";

type HeaderProps = {
    className?: string;
    left: React.ReactNode;
    right: React.ReactNode;
};

export default function Header({
    className = "",
    left,
    right,
}: HeaderProps) {
    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between ${className}`}
        >
            {left}
            {right}
        </header>
    );
};
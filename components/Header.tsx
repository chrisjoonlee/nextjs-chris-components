import React from "react";

type HeaderProps = {
    className?: string;
    left: React.ReactNode;
    right: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({
    className = "",
    left,
    right,
}) => {
    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between ${className}`}
        >
            {left}
            {right}
        </header>
    );
};
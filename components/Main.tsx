import React from "react";

type MainProps = {
    className?: string;
    content?: React.ReactNode;
};

export const Main: React.FC<MainProps> = ({
    className = "",
    content,
}) => {
    return (
        <main
            className={`min-h-screen flex-1 ${className}`}
        >
            {content}
        </main>
    );
};
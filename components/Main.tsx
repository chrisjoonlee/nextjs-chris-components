import React from "react";

type MainProps = {
    className?: string;
    content?: React.ReactNode;
};

export default function Main({
    className = "",
    content,
}: MainProps) {
    return (
        <main
            className={`min-h-screen flex-1 ${className}`}
        >
            {content}
        </main>
    );
};
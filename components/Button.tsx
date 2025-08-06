import React from 'react';

type Props = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    bgColor?: string;
    textColor?: string;
    hoverColor?: string;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
    ({
        text,
        onClick,
        disabled = false,
        bgColor = "bg-blue-500",
        textColor = "text-white",
        hoverColor = "bg-blue-600",
        onKeyDown,
    }, ref) => {
        return (
            <button
                ref={ref}
                tabIndex={0}
                className={`py-2 px-6 rounded-sm ${bgColor} ${textColor} disabled:opacity-50 transition
                hover:${hoverColor} ${disabled ? "" : "cursor-pointer"}
            `}
                onClick={onClick}
                disabled={disabled}
                onKeyDown={onKeyDown}
            >
                {text}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
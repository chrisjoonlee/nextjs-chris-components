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
        bgColor = "bg-primary",
        textColor = "text-white",
        hoverColor = "bg-primary-light",
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
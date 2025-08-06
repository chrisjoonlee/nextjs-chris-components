import React from 'react';
import { bgColors, Color, hoverColors, textColors } from './colors';

type Props = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    bgColor?: Color;
    textColor?: Color;
    hoverColor?: Color;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
    ({
        text,
        onClick,
        disabled = false,
        bgColor = "blue",
        textColor = "white",
        hoverColor = "blue",
        onKeyDown,
    }, ref) => {
        const finalClassName = `py-2 px-6 rounded-sm 
            ${bgColors[bgColor]} ${textColors[textColor]} 
            ${disabled ? "" : `cursor-pointer ${hoverColors[hoverColor]}`} 
            disabled:opacity-50 transition`;

        return (
            <button
                ref={ref}
                tabIndex={0}
                className={`${finalClassName}`}
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
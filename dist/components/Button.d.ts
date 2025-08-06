import React from 'react';
type Props = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    bgColor?: string;
    textColor?: string;
    hoverColor?: string;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
};
declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export default Button;

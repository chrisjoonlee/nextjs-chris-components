import React from 'react';
import { Color } from './colors';
type Props = {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    bgColor?: Color;
    textColor?: Color;
    hoverColor?: Color;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
};
declare const Button: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export default Button;

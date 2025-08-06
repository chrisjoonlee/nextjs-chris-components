import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { bgColors, hoverColors, textColors } from './colors';
const Button = React.forwardRef(({ text, onClick, disabled = false, bgColor = "blue", textColor = "white", hoverColor = "blue", onKeyDown, }, ref) => {
    const finalClassName = `py-2 px-6 rounded-sm 
            ${bgColors[bgColor]} ${textColors[textColor]} 
            ${disabled ? "" : `cursor-pointer ${hoverColors[hoverColor]}`} 
            disabled:opacity-50 transition`;
    return (_jsx("button", { ref: ref, tabIndex: 0, className: `${finalClassName}`, onClick: onClick, disabled: disabled, onKeyDown: onKeyDown, children: text }));
});
Button.displayName = 'Button';
export default Button;

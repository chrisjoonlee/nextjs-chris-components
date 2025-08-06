import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
const Button = React.forwardRef(({ text, onClick, disabled = false, bgColor = "bg-blue-500", textColor = "text-white", hoverColor = "bg-blue-600", onKeyDown, }, ref) => {
    return (_jsx("button", { ref: ref, tabIndex: 0, className: `py-2 px-6 rounded-sm ${bgColor} ${textColor} disabled:opacity-50 transition
                hover:${hoverColor} ${disabled ? "" : "cursor-pointer"}
            `, onClick: onClick, disabled: disabled, onKeyDown: onKeyDown, children: text }));
});
Button.displayName = 'Button';
export default Button;

import { jsx as _jsx } from "react/jsx-runtime";
export default function Main({ className = "", content, }) {
    return (_jsx("main", { className: `min-h-screen flex-1 ${className}`, children: content }));
}
;

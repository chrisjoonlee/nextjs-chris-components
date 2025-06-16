import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Header({ className = "", left, right, }) {
    return (_jsxs("header", { className: `w-full fixed top-0 left-0 z-50 flex items-center justify-between ${className}`, children: [left, right] }));
}
;

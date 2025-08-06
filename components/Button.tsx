import React from "react";
import { twMerge } from "tailwind-merge";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger";

export type ButtonSize =
    | "sm"
    | "md"
    | "lg"
    | "xl"

type Props = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
    fullWidth?: boolean;
    className?: string;
    children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
};

const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-2.5",
    xl: "text-xl px-6 py-3",
};

const Button = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    Props
>(function Button(
    {
        variant = "primary",
        size = "md",
        isLoading = false,
        leftIcon,
        rightIcon,
        href,
        target,
        rel,
        fullWidth = false,
        className,
        children,
        ...rest
    },
    ref
) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    const variantStyle = variantClasses[variant];
    const sizeStyle = sizeClasses[size];
    const widthStyle = fullWidth ? "w-full" : "";

    const finalClassName = twMerge(
        baseStyles,
        variantStyle,
        sizeStyle,
        widthStyle,
        className
    );

    const content = (
        <>
            {isLoading && (
                <svg
                    className="animate-spin mr-2 h-4 w-4 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                </svg>
            )}
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                ref={ref as React.Ref<HTMLAnchorElement>}
                className={finalClassName}
                target={target}
                rel={rel}
                {...rest}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            ref={ref as React.Ref<HTMLButtonElement>}
            className={finalClassName}
            disabled={isLoading || rest.disabled}
            {...rest}
        >
            {content}
        </button>
    );
});

export default Button;
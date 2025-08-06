import React from "react";
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg" | "xl";
declare const Button: React.ForwardRefExoticComponent<{
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
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export default Button;

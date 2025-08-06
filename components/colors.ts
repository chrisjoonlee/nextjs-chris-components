export type Color =
    | "red"
    | "blue"
    | "black"
    | "white"

export const textColors: Record<Color, string> = {
    red: "text-red-500",
    blue: "text-blue-500",
    black: "text-gray-900",
    white: "text-white",
}

export const bgColors: Record<Color, string> = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    black: "bg-gray-900",
    white: "bg-white",
};

export const hoverColors: Record<Color, string> = {
    red: "hover:bg-red-600",
    blue: "hover:bg-blue-600",
    black: "hover:bg-gray-900",
    white: "hover:bg-white",
};
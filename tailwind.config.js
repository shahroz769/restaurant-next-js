/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            animation: {
                "infinite-scroll": "infinite-scroll 100s linear infinite",
            },
            keyframes: {
                "infinite-scroll": {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "100%": {
                        transform: "translateX(-50%)",
                    },
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            maskImage: {
                "feather-shadow":
                    "linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)",
            },
            webkitMaskImage: {
                "feather-shadow":
                    "linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)",
            },
            textStrokeWidth: {
                1: "1px",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        function ({ addUtilities }) {
            addUtilities({
                ".feather-shadow-sm": {
                    maskImage:
                        "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, #000 10%, #000 90%, transparent 100%)",
                },
                ".feather-shadow-md": {
                    maskImage:
                        "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, #000 15%, #000 85%, transparent 100%)",
                },
                ".feather-shadow-lg": {
                    maskImage:
                        "linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)",
                },
                ".text-stroke-red": {
                    "-webkit-text-stroke": "1px #dc2626",
                    "text-stroke": "1px #dc2626",
                },
                // Black text stroke
                ".text-stroke-black": {
                    "-webkit-text-stroke": "1px #000000",
                    "text-stroke": "1px #000000",
                },
            });
        },
    ],
};

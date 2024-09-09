/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 100s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    '0%': {
                        transform: 'translateX(0%)',
                    },
                    '100%': {
                        transform: 'translateX(-50%)',
                    },
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            maskImage: {
                'feather-shadow':
                    'linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)',
            },
            webkitMaskImage: {
                'feather-shadow':
                    'linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        function ({ addUtilities }) {
            addUtilities({
                '.feather-shadow': {
                    maskImage:
                        'linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)',
                    WebkitMaskImage:
                        'linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)',
                },
            });
        },
    ],
};

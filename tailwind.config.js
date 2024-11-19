/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // "./app/**/*.{js,ts,jsx,tsx,mdx}",
        // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        // "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: false, // ou 'media, ou 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#93c8ec",
                    DEFAULT: "#3498db",
                    dark: "#13496c",
                },
                secondary: "#2ecc71",
                success: "#2ecc71",
                warning: "#f1c40f",
                danger: "#e74c3c",
                light: "#f8f9fa",
                dark: "#343a40",
            },
            // fontFamily: {
            //     sans: ['Inter', 'sans-serif'],
            //     serif: ['Merriweather', 'serif'],
            // },
            screens: {
                "3xl": "1600px",
            },
        },
        container: {
            center: true,
        },
    },
    variants: {
        extends: {
            scale: ["active"],
            transforme: ["active"],
        },
    },
    plugins: [],
};

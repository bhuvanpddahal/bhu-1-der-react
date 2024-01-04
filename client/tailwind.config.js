/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                "40px": "40px",
                "50px": "50px",
                "60px": "60px",
                "70px": "70px",
                "200px": "200px",
                "10p": "10%",
                "55p": "55%",
            },
            colors: {
                "lightgrey": "#f0f0f0",
                "grey": "#ccc",
                "darkgrey": "#aaa",
                "medium": "#999",
                "normal": "#555",
                "dark": "#222",
            },
            lineHeight: {
                "50px": "55px",
            }
        },
    },
    plugins: [],
}
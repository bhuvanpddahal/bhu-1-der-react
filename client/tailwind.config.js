/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                "1px": "1px",
                "40px": "40px",
                "50px": "50px",
                "60px": "60px",
                "70px": "70px",
                "200px": "200px",
                "10p": "10%",
                "55p": "55%",
            },
            colors: {
                "lightgrey": "#eee",
                "grey": "#ccc",
                "darkgrey": "#aaa",
                "medium": "#999",
                "normal": "#555",
                "dark": "#222",
            },
            minHeight: {
                "rem": "calc(100vh - 132px)",
            },
            lineHeight: {
                "50px": "55px",
            },
            boxShadow: {
                "medium": "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                "large": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }
        },
    },
    plugins: [],
}
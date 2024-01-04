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
            }
        },
    },
    plugins: [],
}
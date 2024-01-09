/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                "1px": "1px",
                "2px": "2px",
                "15px": "15px",
                "22px": "22px",
                "40px": "40px",
                "50px": "50px",
                "60px": "60px",
                "70px": "70px",
                "100px": "100px",
                "110px": "110px",
                "160px": "160px",
                "200px": "200px",
                "300px": "300px",
                "380px": "350px",
                "400px": "400px",
                "n5px": "-5px",
                "n10px": "-10px",
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
                "primary": "#3d4673",
                "primarydark": "#2b3252",
                "secondary": "#f5793b",
                "dim": "#d7f0fd",
                "darktrans": "rgba(0, 0, 0, 0.5)",
                "lin": "linear-gradient(45deg, #ddd, #eee)",
            },
            fontSize: {
                "15px": "15px",
                "18px": "18px",
                "20px": "20px",
                "22px": "22px",
            },
            backgroundImage: {
                "about": "url('/src/images/assets/bulb.png')",
                "expert": "url('/src/images/assets/build.png')",
            },
            transitionProperty: {
                "color": "color",
                "bg": "background-color",
            },
            minHeight: {
                "rem": "calc(100vh - 144px)",
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
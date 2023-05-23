/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Satoshi", "cursive"]
            },
            colors: {
                primary1: "#003E29",
                primary2: "#E4BBA1",
                primary3: "#D9D9D9",
                borderColor: "#787878",
                bgColor: "#EDEDED",
                bgGreen: "#023423",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '9rem',
                },
            }
        },
    },
    plugins: [],
}
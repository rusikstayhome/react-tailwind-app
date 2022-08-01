const tailwindcss = require('tailwindcss');

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}
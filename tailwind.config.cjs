/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                "theme-1" : "#df460a",
                "theme-2" : "#7ccc81",
                "theme-3" : "#bec1c2",
            }
        }
    },
	plugins: []
};

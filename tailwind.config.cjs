/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'theme-1': '#ff3e19',
				'theme-2': '#7ccc81',
				'theme-3': '#bec1c2',
				background: '#f2f2f2'
				// 'background': '#ffffff'
			}
		}
	},
	plugins: []
};

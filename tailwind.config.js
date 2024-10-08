const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			patua: ['"Patua One"', ...defaultTheme.fontFamily.serif]
		}
	},
	plugins: []
};

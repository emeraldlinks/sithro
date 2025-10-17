import type { Config } from 'tailwindcss';
export default {
	content: [
		"./index.html",
		"./src/**/*.{ts,ripple}",
	],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: []
} satisfies Config

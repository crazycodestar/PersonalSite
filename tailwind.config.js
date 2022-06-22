module.exports = {
	mode: "jit",
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		colors: {
			light: "#ffffff",
			dark: "#000000",
			primary: "#FAF9F6",
			secondary: "#072A6C",
			grey: "#a0a0a0",
			"grey-light": "#f3f3f4",
			transparent: "transparent",
		},
		boxShadow: {
			constant: "0px 0px 6px 0px #c4c4c4",
		},
		extend: {},
	},
	plugins: [],
};

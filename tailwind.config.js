/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			inputs: "rgba(189, 189, 189, 1)",
			text_inputs: "rgba(51, 51, 51, 1)",
			btn_confirm: "rgba(61, 180, 109, 1)",
			btn_delete: "rgba(235, 87, 87, 1)",
			default: "white",
			modal_bg: "rgba(0, 0, 0, 0.50)",
		},
		fontFamily: {
			sans: ["Noto", "sans-serif"],
		},
		extend: {},
	},
	plugins: [],
}

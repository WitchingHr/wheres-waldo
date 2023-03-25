/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				slide: {
					"0%": { transform: "translateX(100px)", opacity: "0" },
					"70%": { opacity: 0 },
					"100%": { transform: "none", opacity: "1" },
				},
				open: {
					"0%": { height: "0px", transform: "skew(8deg, 11deg)" },
					"25%": { height: "44px", transform: "unset" },
					"38%": { height: "44px" },
					"63%": { height: "84px" },
					"76%": { height: "84px" },
					"100%": { height: "126px" },
				},
				incorrect: {
					"20%": { color: "red", transform: "rotate(2deg)" },
					"40%": { transform: "rotate(-2deg)" },
					"60%": { transform: "rotate(2deg)" },
					"80%": { transform: "rotate(-2deg)" },
				},
				correct: {
					"20%": { color: "green", transform: "translateY(4px)" },
					"40%": { color: "green", transform: "translateY(0px)" },
					"60%": { color: "green" },
				},
				fadeout: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				arrow: {
					"0%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(10px)" },
				},
				rise: {
					"50%": { opacity: "0" },
					"100%": { transform: "translateY(0px)", opacity: "1" },
				},
			},
			animation: {
				slide: "slide 1.5s ease-out",
				open: "open 0.3s linear",
				incorrect: "incorrect 0.5s ease-out",
				correct: "correct 0.5s ease-out",
				fadeout: "fadeout 0.5s forwards ease-out, spin 1s linear infinite",
				arrow: "arrow 1.2s linear infinite",
				rise: "rise 1s forwards linear",
			},
		},
	},
	plugins: [],
};

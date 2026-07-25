import type { Config } from "tailwindcss";

/**
 * Organic design system tokens.
 *
 * Ported from design-system/styles.css in the design handoff. Tonal ramps were
 * generated in OKLCH on one shared lightness scale, so the same step of any
 * role matches the others in visual value — keep them in step if retuning.
 *
 * Accessibility note carried over from the handoff: body-size text in the
 * accent must use accent-700 or deeper. The base accent is only 3:1 against
 * the page ground, which is fine for large text and UI, not for body copy.
 */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	prefix: "",
	theme: {
		extend: {
			colors: {
				bg: "#f5ead8",
				surface: "#ebddc5",
				text: "#201e1d",
				divider: "color-mix(in srgb, #201e1d 16%, transparent)",

				neutral: {
					100: "#f9f4ed",
					200: "#eee7db",
					300: "#dcd3c4",
					400: "#c0b6a5",
					500: "#a19786",
					600: "#82796a",
					700: "#645c50",
					800: "#474238",
					900: "#2e2b25",
				},

				accent: {
					DEFAULT: "#c67139",
					100: "#fff2eb",
					200: "#ffe1d0",
					300: "#ffc6a5",
					400: "#f6a06b",
					500: "#d67f48",
					600: "#b2622d",
					700: "#8c491a",
					800: "#643312",
					900: "#402310",
				},

				/* Sage. Named accent2 because Tailwind keys cannot contain a dot. */
				accent2: {
					DEFAULT: "#7a8a5e",
					100: "#f0fae1",
					200: "#e1eecc",
					300: "#ccdbb2",
					400: "#aebf92",
					500: "#8fa073",
					600: "#728157",
					700: "#56633f",
					800: "#3d472b",
					900: "#272e1b",
				},

				/* shadcn bindings, driven by the HSL properties in index.css. */
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},

			fontFamily: {
				heading: ["Caprasimo", "system-ui", "sans-serif"],
				body: ["Figtree", "system-ui", "sans-serif"],
			},

			borderRadius: {
				md: "16px",
				lg: "28px",
				full: "999px",
			},

			boxShadow: {
				sm: "0 2px 10px color-mix(in srgb, #201e1d 8%, transparent)",
				md: "0 10px 30px color-mix(in srgb, #201e1d 12%, transparent)",
				lg: "0 22px 60px color-mix(in srgb, #201e1d 18%, transparent)",
			},

			keyframes: {
				zrFade: {
					from: { opacity: "0", transform: "translateY(10px)" },
					to: { opacity: "1", transform: "none" },
				},
			},
			animation: {
				"zr-fade": "zrFade .4s ease both",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

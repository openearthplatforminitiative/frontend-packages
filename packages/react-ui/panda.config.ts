import { defineConfig } from "@pandacss/dev"
import { preset } from "./src/preset"

export default defineConfig({
	presets: [preset],
	preflight: true,
	include: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	jsxFramework: "react",
	outdir: "./src/styled-system",
})

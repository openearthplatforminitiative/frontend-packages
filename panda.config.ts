import { defineConfig } from "@pandacss/dev"
import { preset } from "@openepi/react-ui"

export default defineConfig({
	presets: [preset],
	preflight: true,
	include: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./packages/react-ui/**/*.{js,jsx,ts,tsx}",
	],
	exclude: [],
	jsxFramework: "react",
	importMap: "@openepi/react-ui/styled-system",
	outdir: "styled-system",
})

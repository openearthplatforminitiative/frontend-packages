import { defineConfig } from "@pandacss/dev"
import { preset } from "./src/preset"

export default defineConfig({
	presets: [preset],
	preflight: true,
	importMap: "@openepi/styled-system",
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	outExtension: "js",
	jsxFramework: "react",
	outdir: "../styled-system/dist",
})

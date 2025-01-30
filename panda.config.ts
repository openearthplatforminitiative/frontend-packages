import { defineConfig } from "@pandacss/dev"
import { preset } from "@openepi/react-ui/preset"

export default defineConfig({
	presets: [preset],
	importMap: "@openepi/styled-system",
	preflight: true,
	include: ["./src/**/*.{js,jsx,ts,tsx}"],
	exclude: [],
	jsxFramework: "react",
})

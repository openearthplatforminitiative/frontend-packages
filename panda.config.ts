import { defineConfig } from "@pandacss/dev";
import { preset } from "./packages/react-ui/src/theme/index"

export default defineConfig({
  presets: [preset],
  preflight: true,
  include: ["./packages/react-ui/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  importMap: "@openepi/react-ui/styled-system",
});
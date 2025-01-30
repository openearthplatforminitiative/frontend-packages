import { definePreset } from "@pandacss/dev"
import { colors } from "./theme/tokens/colors"
import { fonts } from "./theme/tokens/fonts"
import { slotRecipes } from "./theme/slotRecipes"
import { recipes } from "./theme/recipes"
import { globalCss } from "./theme/globalCss"
import { semanticColors } from "./theme/semantic-tokens/semanticColors"
import { spacing } from "./theme/tokens/spacing"
import { textStyles } from "./theme/textStyles"
import { fontSizes } from "./theme/tokens/fontSizes"
import { sizes } from "./theme/tokens/sizes"
import { radii } from "./theme/tokens/radius"
import { keyframes } from "./theme/tokens/keyframes"
import { zIndices } from "./theme/tokens/zIndices"
import { breakpoints } from "./theme/tokens/breakpoints"
import pandaPreset from "@pandacss/preset-panda"
import { layerStyles } from "./theme/layerStyles"

export const preset = definePreset({
	presets: [pandaPreset],
	name: "openepi/react-ui",
	theme: {
		extend: {
			semanticTokens: {
				colors: semanticColors,
			},
			tokens: {
				colors: colors,
				fonts: fonts,
				spacing: spacing,
				fontSizes: fontSizes,
				sizes: sizes,
				radii: radii,
				zIndex: zIndices,
			},
			layerStyles: layerStyles,
			breakpoints: breakpoints,
			keyframes: keyframes,
			textStyles: textStyles,
			recipes: recipes,
			slotRecipes: slotRecipes,
		},
	},
	staticCss: {
		recipes: "*",
		css: [
			{
				properties: {
					colorPalette: ["gray", "primary", "secondary", "tertiary"],
				},
				responsive: true,
			},
		],
	},
	globalCss: globalCss,
})

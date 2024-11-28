import { definePreset } from "@pandacss/dev";
import { colors } from "./tokens/colors";
import { fonts } from "./tokens/fonts";
import { slotRecipes } from "./slotRecipes";
import { recipes } from "./recipes";
import { globalCss } from "./globalCss";
import { semanticColors } from "./semantic-tokens/semanticColors";
import { spacing } from "./tokens/spacing";
import { textStyles } from "./textStyles";
import { fontSizes } from "./tokens/fontSizes";
import { sizes } from "./tokens/sizes";
import { radii } from "./tokens/radius";
import { keyframes } from "./tokens/keyframes";

export const preset = definePreset({
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
      },
      keyframes: keyframes,
      textStyles: textStyles,
      recipes: recipes,
      slotRecipes: slotRecipes,
    }
  },
  staticCss: {
    recipes: "*",
    css: [
      {
        properties: { 
          colorPalette: [
            "gray",
            "primary",
            "secondary",
            "tertiary",
          ]
        }
      }
    ]
  },
  globalCss: globalCss,
})
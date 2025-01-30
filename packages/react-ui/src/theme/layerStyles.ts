import { defineLayerStyles } from "@pandacss/dev"
import { filled } from "./layer-styles/filled"
import { outlined } from "./layer-styles/outlined"

export const layerStyles = defineLayerStyles({
	filled: filled,
	outlined: outlined,
})

import { defineSlotRecipe } from "@pandacss/dev"
import { cardAnatomy } from "../../anatomies/card"

export const cardRecipe = defineSlotRecipe({
	className: "card",
	slots: cardAnatomy.keys(),
	base: {
		root: {
			position: "relative",
			maxWidth: "sm",
		},
		content: {
			overflow: "hidden",
			borderRadius: "lg",
			bg: "gray.100",
			color: "black",
			height: "full",
			width: "full",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			cursor: "pointer",
			_hover: {
				bg: "secondary.muted",
				"& .card__srcIcon": {
					transform: "translateX(10px)",
				},
			},
			"[data-external] &": {
				_hover: {
					"& .card__srcIcon": {
						transform: "translateX(10px) translateY(-10px)",
					},
				},
			},
		},
		body: {
			display: "flex",
			flexDirection: "column",
			gap: "2",
			p: "6",
		},
		outerIcon: {
			w: "12",
			h: "12",
			position: "absolute",
			top: "-6",
			left: "-6",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			textStyle: "2xl",
			bg: "green.700",
			color: "white",
			rounded: "full",
		},
		title: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			textAlign: "left",
			w: "full",
			textStyle: "xl",
		},
		srcIcon: {
			transition: "transform 0.3s",
		},
	},
})

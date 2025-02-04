import { toastAnatomy } from "@ark-ui/react"
import { defineSlotRecipe } from "@pandacss/dev"

export const toastRecipe = defineSlotRecipe({
	className: "toast",
	slots: toastAnatomy.keys(),
	base: {
		root: {
			colorPalette: "gray",
			bg: "colorPalette.subtle",
			color: "black",
			p: "4",
			position: "relative",
			borderRadius: "lg",
			minWidth: "20rem",
			height: "var(--height)",
			opacity: "var(--opacity)",
			overflowWrap: "anywhere",
			scale: "var(--scale)",
			translate: "var(--x) var(--y) 0",
			willChange: "translate, scale, opacity, height",
			zIndex: "var(--z-index)",
			transitionProperty: "translate, scale, opacity, height",
			transitionTimingFunction: "default",
			_motionReduce: {
				transition: "none",
				transitionDuration: "0s",
			},
			"&[data-type=warning]": {
				bg: "warning.subtle",
			},
			"&[data-type=success]": {
				bg: "success.subtle",
			},
			"&[data-type=error]": {
				bg: "error.subtle",
			},
		},
		title: {
			fontSize: "lg",
		},
		description: {
			fontSize: "md",
		},
		actionTrigger: {},
		closeTrigger: {
			position: "absolute",
			top: "2",
			right: "2",
		},
	},
	variants: {},
	defaultVariants: {},
})

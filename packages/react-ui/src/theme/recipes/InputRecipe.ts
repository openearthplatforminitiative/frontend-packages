import { defineRecipe } from "@pandacss/dev"

export const inputRecipe = defineRecipe({
	className: "input",
	base: {
		root: {
			textStyle: "md",
			bg: "transparent",
			border: "1px solid",
			borderColor: "transparent",
			colorPalette: "gray",
			_disabled: {
				cursor: "not-allowed",
			},
			_focus: {
				outline: "0",
				outlineWidth: "2px",
				outlineStyle: "solid",
				outlineColor: "transparent",
			},
		},
	},
	variants: {
		variant: {
			outlined: {
				layerStyle: "outlined",
				borderRadius: "lg",
				h: "11",
				p: "2",
				_invalid: {
					borderColor: "border.error",
					_focus: {
						outlineColor: "border.error/50",
					},
				},
			},
			filled: {
				layerStyle: "filled",
				borderRadius: "lg",
				h: "11",
				minW: "md",
				p: "2",
				_invalid: {
					borderColor: "border.error",
					_focus: {
						outlineColor: "error.focusRing",
					},
				},
			},
			unstyled: {},
		},
	},
	defaultVariants: {
		variant: "outlined",
	},
})

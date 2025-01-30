import { checkboxAnatomy } from "@ark-ui/react"
import { defineSlotRecipe } from "@pandacss/dev"

export const checkboxRecipe = defineSlotRecipe({
	className: "checkbox",
	slots: checkboxAnatomy.keys(),
	base: {
		root: {
			display: "inline-flex",
			gap: "2",
			alignItems: "center",
			verticalAlign: "top",
			position: "relative",
			colorPalette: "gray",
		},

		control: {
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			flexShrink: "0",
			border: "1px solid",
			borderRadius: "sm",
			focusVisibleRing: "outside",

			_icon: {
				boxSize: "full",
			},
			_disabled: {
				opacity: "0.5",
			},
		},
		label: {
			userSelect: "none",
			_disabled: {
				opacity: "0.5",
			},
		},
		indicator: {
			display: "flex",
		},
	},
	variants: {
		variant: {
			outlined: {
				control: {
					layerStyle: "outlined",
					_invalid: {
						colorPalette: "red",
						borderColor: "border.error",
					},
				},
			},
			filled: {
				control: {
					layerStyle: "filled",
					_invalid: {
						bg: "bg.error",
						colorPalette: "red",
						borderColor: "border.error",
					},
				},
			},
			solid: {
				control: {
					layerStyle: "outlined",
					"&:is([data-state=checked], [data-state=indeterminate])": {
						layerStyle: "filled",
					},
					_invalid: {
						"&:is([data-state=checked], [data-state=indeterminate])": {
							bg: "bg.error",
						},
						colorPalette: "red",
						borderColor: "border.error",
					},
				},
			},
		},
		size: {
			sm: {
				control: {
					h: "4",
					w: "4",
					textStyle: "sm",
				},
			},
			md: {
				control: {
					h: "5",
					w: "5",
					textStyle: "md",
				},
			},
			lg: {
				control: {
					h: "6",
					w: "6",
					textStyle: "lg",
				},
			},
		},
	},
	defaultVariants: {
		variant: "outlined",
		size: "md",
	},
})

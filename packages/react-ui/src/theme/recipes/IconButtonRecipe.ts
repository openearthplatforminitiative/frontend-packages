import { defineRecipe } from "@pandacss/dev"

export const iconButtonRecipe = defineRecipe({
	className: "iconbutton",
	base: {
		colorPalette: "primary",
		display: "inline-flex",
		appearance: "none",
		alignItems: "center",
		justifyContent: "center",
		userSelect: "none",
		position: "relative",
		whiteSpace: "nowrap",
		borderRadius: "lg",
		verticalAlign: "middle",
		borderWidth: "1px",
		borderColor: "transparent",
		cursor: "pointer",
		flexShrink: "0",
		outline: "0",
		transitionProperty: "common",
		transitionDuration: "moderate",
		focusVisibleRing: "outside",
		_focus: {
			outline: "0",
			outlineWidth: "2px",
			outlineStyle: "solid",
			outlineColor: "colorPalette.solid/50",
		},
	},
	variants: {
		variant: {
			solid: {
				backgroundColor: "colorPalette.solid",
				color: "colorPalette.contrast",
				borderColor: "colorPalette.solid",
				_hover: {
					backgroundColor: "colorPalette.solid/90",
					color: "colorPalette.contrast/90",
				},
				_active: {
					backgroundColor: "colorPalette.solid/80",
					color: "colorPalette.contrast/80",
				},
				_expanded: {
					backgroundColor: "colorPalette.solid/80",
					color: "colorPalette.contrast/80",
				},
			},
			subtle: {
				bg: "colorPalette.subtle",
				color: "black",
				_hover: {
					bg: "colorPalette.muted",
				},
				_active: {
					bg: "colorPalette.emphasized",
				},
				_expanded: {
					bg: "colorPalette.emphasized",
				},
			},
			surface: {
				bg: "colorPalette.subtle",
				color: "black",
				borderColor: "colorPalette.emphasized",
				_hover: {
					bg: "colorPalette.muted",
				},
				_active: {
					bg: "colorPalette.emphasized",
				},
				_expanded: {
					bg: "colorPalette.emphasized",
				},
			},
			outline: {
				borderColor: "colorPalette.solid",
				color: "black",
				_hover: {
					bg: "colorPalette.subtle",
				},
				_active: {
					bg: "colorPalette.muted",
				},
				_expanded: {
					bg: "colorPalette.muted",
					_hover: {
						bg: "colorPalette.subtle",
					},
				},
			},
			ghost: {
				color: "fg",
				_hover: {
					bg: "bg.subtle",
				},
				_open: {
					bg: "colorPalette.muted",
					_hover: {
						bg: "colorPalette.subtle",
					},
				},
				_active: {
					bg: "colorPalette.muted",
				},
			},
			plain: {
				color: "colorPalette.solid",
				_hover: {
					color: "colorPalette.empasized",
				},
				_active: {
					color: "colorPalette.fg",
				},
				_expanded: {
					color: "colorPalette.fg",
				},
			},
		},
		size: {
			xs: {
				h: "6",
				w: "6",
				p: "0.5",
				textStyle: "md",
			},
			sm: {
				h: "8",
				w: "8",
				p: "1",
				textStyle: "lg",
			},
			md: {
				h: "11",
				w: "11",
				p: "2",
				textStyle: "2xl",
			},
			lg: {
				h: "12",
				w: "12",
				p: "2",
				textStyle: "3xl",
			},
		},
		radius: {
			lg: {
				borderRadius: "lg",
			},
			full: {
				borderRadius: "full",
			},
		},
	},
	defaultVariants: {
		variant: "solid",
		radius: "lg",
		size: "md",
	},
})

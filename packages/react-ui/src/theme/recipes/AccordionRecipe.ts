import { accordionAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

export const accordionRecipe = defineSlotRecipe({
	className: "accordion",
	slots: accordionAnatomy.keys(),
	base: {
		root: {
			colorPalette: 'gray'
		},
		item: {
			mb: '2',
			overflow: 'hidden',
			border: '1px solid',
			borderColor: 'transparent',
		},
		itemTrigger: {
			w: '100%',
			cursor: 'pointer',
			textStyle: 'lg',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		itemIndicator: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			transition: 'transform 0.2s',
			transform: 'rotate(0deg)',
			transformOrigin: "center",
			_open: {
				transform: 'rotate(180deg)',
			},
		}
	},
	variants: {
		variant: {
			outline: {
				item: {
					px: '2',
					border: 'none',
					borderBottom: "1px solid",
					borderColor: "border",
				},
				itemTrigger: {
					py: '2',
				},
				itemContent: {
					py: '2',
				}
			},
			subtle: {
				item: {
					px: '4',
					borderRadius: "xl",
					_hover: {
						backgroundColor: "colorPalette.subtle",
						color: "colorPalette.fg",
					},
					_open: {
						backgroundColor: "colorPalette.subtle",
						color: "colorPalette.fg",
					},
				},
				itemTrigger: {
					py: '3',
				},
				itemContent: {
					py: '3',
				}
			},
			enclosed: {
				item: {
					borderColor: "border",
					borderRadius: "xl",
					_hover: {
						backgroundColor: "colorPalette.subtle",
						color: "colorPalette.fg",
					},
					_open: {
						backgroundColor: "colorPalette.subtle",
						color: "colorPalette.fg",
					},
				},
				itemTrigger: {
					px: '4',
					py: '3',
				},
				itemContent: {
					backgroundColor: "colorPalette.subtle",
					color: "colorPalette.fg",
					px: '4',
					py: '3',
				}
			},
      plain: {
				item: {
        	color: "colorPalette.fg",
				},
				itemTrigger: {
					py: '2'
				},
				itemContent: {
					py: '2',
				},
			},
		}
	},
	defaultVariants: {
		variant: "outline",
	},
})
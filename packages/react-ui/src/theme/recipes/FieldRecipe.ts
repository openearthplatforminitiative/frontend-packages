import { fieldAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

export const fieldRecipe = defineSlotRecipe({
	className: "field",
	slots: fieldAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			flexDirection: 'column',
			gap: '1',
			colorPalette: 'gray',
		},
		input: {
			borderRadius: 'lg',
			textStyle: 'md',
			h: '11',
			p: '2',
			mb: '2',
			bg: "transparent",
			border: '1px solid',
			borderColor: 'border',
			colorPalette: 'gray',
			_focus: {
				outline: '0',
				outlineWidth: '2px',
				outlineStyle: 'solid',
				outlineColor: 'primary.solid/50',
			},
			_invalid: {
				borderColor: 'border.error',
				_focus: {
					outlineColor: 'border.error/50',
				}
			}
		},
		label: {
			textStyle: 'lg',
		},
		select: {
			appearance: 'none',
			border: '1px solid',
			borderColor: 'border',
			borderRadius: 'lg',
			h: '11',
			p: '2',
			textStyle: 'md',
			outline: '0',
			_focus: {
				outline: '0',
				outlineWidth: '2px',
				outlineStyle: 'solid',
				outlineColor: 'primary.solid/50',
			},
			_invalid: {
				borderColor: 'border.error',
				_focus: {
					outlineColor: 'border.error/50',
				}
			}
		},
		textarea: {
			border: '1px solid',
			borderColor: 'colorPalette.muted',
			borderRadius: 'lg',
			minH: '11',
			p: '2',
			textStyle: 'md',
			outline: '0',
			_focus: {
				outline: '0',
				outlineWidth: '2px',
				outlineStyle: 'solid',
				outlineColor: 'primary.solid/50',
			},
			_invalid: {
				borderColor: 'border.error',
				_focus: {
					outlineColor: 'border.error/50',
				}
			}
		},
		errorText: {
			textStyle: 'md',
		},
		helperText: {
			textStyle: 'md',
		},
		requiredIndicator: {
			marginLeft: '1',
			textStyle: 'lg',
			color: 'fg.error',
		}
	},
	variants: {},
	defaultVariants: {},
})
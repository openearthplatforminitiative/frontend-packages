import { fieldAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

export const fieldRecipe = defineSlotRecipe({
	className: "field",
	slots: fieldAnatomy.keys(),
	base: {
		root: {
			display: 'inline-flex',
			flexDirection: 'column',
			gap: '1',
			colorPalette: 'gray',
			_disabled: {
				color: 'fg.muted',
			},
		},
		label: {
			textStyle: 'lg',
		},
		errorText: {
			textStyle: 'md',
			color: 'fg.error',
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
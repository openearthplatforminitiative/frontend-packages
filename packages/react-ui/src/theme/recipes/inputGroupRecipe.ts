import { defineRecipe } from "@pandacss/dev";

export const inputGroupRecipe = defineRecipe({
	className: "inputgroup",
	jsx: ['InputGroup'],
	base: {
		borderRadius: 'lg',
		display: 'inline-flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		textStyle: 'md',
		minW: 'md',
		minH: '11',
		px: '2',
		gap: '2',
		bg: "transparent",
		border: '1px solid',
		borderColor: 'transparent',
		colorPalette: 'gray',
		_focusWithin: {
			outline: '0',
			outlineWidth: '2px',
			outlineStyle: 'solid',
		},
		_disabled: {
			cursor: 'not-allowed',
			'&>*': {
				pointerEvents: 'none',
			}
		}
	},
	variants: {
		variant: {
			outlined: {
				borderColor: 'border',
				_focusWithin: {
					outlineColor: 'gray.focusRing',
				},
				_disabled: {
					color: 'fg.muted',
					borderColor: 'border.muted',
				},
				_invalid: {
					borderColor: 'border.error',
					_focusWithin: {
						outlineColor: 'border.error/50',
					}
				},
			},
			filled: {
				borderColor: 'gray.muted',
				bg: 'gray.muted',
				_focusWithin: {
					outlineColor: 'gray.focusRing',
				},
				_disabled: {
					color: 'fg.subtle',
					bg: 'gray.subtle',
					borderColor: 'border.subtle',
				},
				_invalid: {
					borderColor: 'border.error',
					_focusWithin: {
						outlineColor: 'border.error/50',
					}
				},
			}
		}
	},
	defaultVariants: {
		variant: 'outlined'
	}
});
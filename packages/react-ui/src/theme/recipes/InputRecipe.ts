import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
  className: "input",
  base: {
    root: {
			textStyle: 'md',
			bg: "transparent",
			border: '1px solid',
			borderColor: 'transparent',
			colorPalette: 'gray',
			_disabled: {
				cursor: 'not-allowed',
			},
			_focus: {
				outline: '0',
				outlineWidth: '2px',
				outlineStyle: 'solid',
				outlineColor: 'transparent'
			}
    },
  },
	variants: {
		variant: {
			outlined: {
				borderRadius: 'lg',
				h: '11',
				minW: 'md',
				p: '2',
				borderColor: 'border',
				_focus: {
					outlineColor: 'gray.focusRing',
				},
				_disabled: {
					color: 'fg.muted',
					borderColor: 'border.muted',
				},
				_invalid: {
					borderColor: 'border.error',
					_focus: {
						outlineColor: 'border.error/50',
					}
				}
			},
			filled: {
				borderRadius: 'lg',
				h: '11',
				minW: 'md',
				p: '2',
				borderColor: 'gray.muted',
				bg: 'gray.muted',
				_focus: {
					outlineColor: 'gray.focusRing',
				},
				_disabled: {
					color: 'fg.muted',
					background: 'gray.subtle',
				},
				_invalid: {
					borderColor: 'border.error',
					_focus: {
						outlineColor: 'error.focusRing',
					}
				}
			},
			unstyled: {}
		}
	},
	defaultVariants: {
		variant: 'outlined'
	}
})
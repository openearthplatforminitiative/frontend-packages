import { defineRecipe } from "@pandacss/dev";

export const nativeSelectRecipe = defineRecipe({
  className: "native-select",
  base: {
    appearance: 'none',
    border: '1px solid',
    borderColor: 'transparent',
    textStyle: 'md',
    outline: '0',
    _disabled: {
      cursor: 'not-allowed',
    },
    _focus: {
      outline: '0',
      outlineWidth: '2px',
      outlineStyle: 'solid',
      outlineColor: 'transparent',
    }
  },
  variants: {
		variant: {
			outlined: {
				borderRadius: 'lg',
				h: '11',
				minW: 'md',
				p: '2',
				borderColor: 'border',
        _disabled: {
          color: 'fg.muted',
          borderColor: 'border.muted',
        },
				_focus: {
					outlineColor: 'gray.focusRing',
				},
				_invalid: {
					borderColor: 'border.error',
					_focus: {
						outlineColor: 'error.focusRing',
					}
				},
				'&[data-invalid="true"]': {
					borderColor: 'border.error',
					_focus: {
						outlineColor: 'error.focusRing',
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
          borderColor: 'border.muted',
        },
				_invalid: {
					borderColor: 'border.error',
					_focus: {
						outlineColor: 'error.focusRing',
					}
				},
				'&[data-invalid="true"]': {
					borderColor: 'border.error',
					_focus: {
						outlineColor: 'error.focusRing',
					}
				}
			},
			unstyled: {}
		},
		size: {
			'xs': {
				h: '6',
				minW: 'min',
				p: '0.5',
				textStyle: 'sm',
			},
			'sm': {
				h: '8',
				minW: 'min',
				p: '1',
				textStyle: 'sm',
			},
			'md': {
				h: '11',
				minW: 'md',
				p: '2',
				textStyle: 'md',
			},
			'lg': {
				h: '12',
				minW: 'lg',
				p: '2',
				textStyle: 'lg',
			},
			'xl': {
				h: '14',
				minW: 'xl',
				p: '2',
				textStyle: 'xl',
			},
			'none': {}
		}
	},
	defaultVariants: {
		variant: 'outlined',
		size: 'md'
	}
})
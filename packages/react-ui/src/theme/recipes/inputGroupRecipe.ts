import { defineRecipe } from "@pandacss/dev";

export const inputGroupRecipe = defineRecipe({
	className: "inputgroup",
	jsx: ['InputGroup'],
	base: {
		borderRadius: 'lg',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		textStyle: 'md',
		minH: '11',
		p: '2',
		mb: '2',
		bg: "transparent",
		border: '1px solid',
		borderColor: 'border',
		colorPalette: 'gray',
		_focusWithin: {
			outline: '0',
			outlineWidth: '2px',
			outlineStyle: 'solid',
			outlineColor: 'primary.solid/50',
		},
		_invalid: {
			borderColor: 'border.error',
			_focusWithin: {
				outlineColor: 'border.error/50',
			}
		},
		'&>*[data-invalid="true"]': {
			borderColor: 'border.error',
			_focusWithin: {
				outlineColor: 'border.error/50',
			}
		}
	}
});
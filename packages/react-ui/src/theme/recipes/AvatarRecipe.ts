import { avatarAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

export const avatarRecipe = defineSlotRecipe({
	className: "avatar",
	slots: avatarAnatomy.keys(),
	base: {
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '3rem',
			width: '3rem',
			borderRadius: 100,
			overflow: 'hidden',
			colorPalette: 'primary',
			backgroundColor: 'colorPalette.solid',
			color: 'colorPalette.contrast',
		},
		image: {
			width: '100%',
			height: '100%',
			objectFit: 'cover'
		},
		fallback: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			textStyle: 'lg',
		}
	},
	variants: {},
	defaultVariants: {},
})
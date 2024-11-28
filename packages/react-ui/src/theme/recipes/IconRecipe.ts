import { defineRecipe } from "@pandacss/dev";

export const iconRecipe = defineRecipe({
  className: "icon",
	base: {
		margin: 0,
		height: "1em",
		width: "1em",
		fill: "currentColor",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
	},
	variants: {
		animation: {
			spin: {
				animation: "spin 1s linear infinite",
			},
		},
	},
});
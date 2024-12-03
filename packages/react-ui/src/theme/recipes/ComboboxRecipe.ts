import { comboboxAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";

export const comboboxRecipe = defineSlotRecipe({
	className: "combobox",
	slots: comboboxAnatomy.keys(),
	base: {
		root: {
			display: "inline-flex",
		},
		content: {
			bg: "bg",
			border: "1px solid",
			borderColor: "border",
			display: "flex",
			flexDirection: "column",
			gap: 2,
			maxH: "sm",
			overflowY: "auto",
			rounded: "lg",
			minW: "8rem",
			p: 2,
			boxShadow: "1rem 1rem 1rem rgba(0, 0, 0, 0.1)"
		},
		itemGroup: {
			display: "flex",
			flexDirection: "column",
			gap: 2
		},
		itemGroupLabel: {
			textStyle: "md",
			pl: 2,
		},
		trigger: {
			"&>svg": {
				transition: 'transform 0.2s',
				transform: 'rotate(0deg)',
				transformOrigin: "center",
			},
			_open: {
				"&>svg": {
					transform: 'rotate(180deg)',
				},
			},
		},
		input: {
			outline: 0,
		},
		item: {
			display: "flex",
			justifyContent: "space-between",
			px: 3,
      py: 2,
			textStyle: "lg",
      rounded: "lg",
      _highlighted: {
        bg: "gray.100",
				textDecoration: "underline",
      },
			_checked: {
				bg: "secondary.muted",
				_highlighted: {
					bg: "secondary.subtle",
				},
			},
		}
	}
})
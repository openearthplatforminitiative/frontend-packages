import { defineSlotRecipe } from "@pandacss/dev"
import { tableAnatomy } from "../../anatomies/table"

export const tableRecipe = defineSlotRecipe({
	className: "table",
	slots: tableAnatomy.keys(),
	base: {
		root: {
			colorPalette: "secondary",
			fontVariantNumeric: "lining-nums tabular-nums",
			width: "full",
			textAlign: "start",
			verticalAlign: "top",
			borderSpacing: "0",
			borderCollapse: "separate",
		},
		row: {
			_selected: {
				"& td": {
					bg: "colorPalette.subtle",
				},
			},
		},
		cell: {
			textAlign: "start",
			alignItems: "center",
		},
		columnHeader: {
			fontWeight: "semibold",
			textAlign: "start",
			color: "fg",
		},
		caption: {
			fontWeight: "semibold",
			textStyle: "xs",
		},
		footer: {
			fontWeight: "semibold",
		},
	},
	variants: {
		variant: {
			line: {
				columnHeader: {
					borderColor: "border",
					borderBottomWidth: "1px",
				},
				cell: {
					borderColor: "border",
					borderBottomWidth: "1px",
				},
			},
		},
		showColumnBorder: {
			true: {
				columnHeader: {
					"&:not(:last-of-type)": {
						borderInlineEndWidth: "1px",
					},
				},
				cell: {
					"&:not(:last-of-type)": {
						borderInlineEndWidth: "1px",
					},
				},
			},
		},
		stickyHeader: {
			true: {
				header: {
					"& :where(tr)": {
						bg: "bg",
						top: "var(--table-sticky-offset, 0)",
						position: "sticky",
						zIndex: 2,
					},
				},
			},
		},
		stickyFirstColumn: {
			true: {
				row: {
					_selected: {
						"& td:first-child, & th:first-child": {
							bg: "colorPalette.subtle",
						},
					},
					"& td:first-child, & th:first-child": {
						bg: "bg",
						borderRightWidth: "1px",
						left: "var(--table-sticky-offset, 0)",
						position: "sticky",
						zIndex: 1,
					},
				},
			},
		},
		interactive: {
			true: {
				body: {
					"& tr": {
						cursor: "pointer",
						_hover: {
							"& td": {
								bg: "gray.subtle/50",
							},
						},
					},
				},
			},
		},
		size: {
			sm: {
				root: {
					textStyle: "sm",
				},
				columnHeader: {
					px: "2",
					py: "2",
				},
				cell: {
					px: "2",
					py: "2",
				},
			},
			md: {
				root: {
					textStyle: "sm",
				},
				columnHeader: {
					px: "3",
					py: "3",
				},
				cell: {
					px: "3",
					py: "3",
				},
			},
			lg: {
				root: {
					textStyle: "md",
				},
				columnHeader: {
					px: "4",
					py: "3",
				},
				cell: {
					px: "4",
					py: "3",
				},
			},
		},
	},
	defaultVariants: {
		variant: "line",
		size: "md",
	},
})

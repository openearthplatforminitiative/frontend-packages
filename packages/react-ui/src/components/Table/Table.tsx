import { ark, HTMLArkProps } from "@ark-ui/react"
import { JsxStyleProps } from "@openepi/styled-system/types"
import { createStyleContext } from "../../utils/createStyleContext"
import { table, type TableVariantProps } from "@openepi/styled-system/recipes"
import { Tab } from "@openepi/icons"

const { withProvider, withContext } = createStyleContext(table)

export const Table = withProvider<
	HTMLTableElement,
	JsxStyleProps & TableVariantProps & HTMLArkProps<"table">
>(ark.table, "root")

Table.displayName = "Table"

export const TableHead = withContext<
	HTMLTableSectionElement,
	JsxStyleProps & HTMLArkProps<"thead">
>(ark.thead, "header")

TableHead.displayName = "TableHead"

export const TableBody = withContext<
	HTMLTableSectionElement,
	JsxStyleProps & HTMLArkProps<"tbody">
>(ark.tbody, "body")

TableBody.displayName = "TableBody"

export const TableRow = withContext<
	HTMLTableRowElement,
	JsxStyleProps & HTMLArkProps<"tr">
>(ark.tr, "row")

TableRow.displayName = "TableRow"

export const TableColumnHeader = withContext<
	HTMLTableCellElement,
	JsxStyleProps & HTMLArkProps<"th">
>(ark.th, "columnHeader")

TableColumnHeader.displayName = "TableColumnHeader"

export const TableCell = withContext<
	HTMLTableCellElement,
	JsxStyleProps & HTMLArkProps<"td">
>(ark.td, "cell")

TableCell.displayName = "TableCell"

export const TableFooter = withContext<
	HTMLTableSectionElement,
	JsxStyleProps & HTMLArkProps<"tfoot">
>(ark.tfoot, "footer")

TableFooter.displayName = "TableFooter"

export const TableCaption = withContext<
	HTMLTableCaptionElement,
	JsxStyleProps & HTMLArkProps<"caption">
>(ark.caption, "caption")

TableCaption.displayName = "TableCaption"

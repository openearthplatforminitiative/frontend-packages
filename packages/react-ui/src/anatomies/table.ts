import { createAnatomy } from "@zag-js/anatomy"

export const tableAnatomy = createAnatomy("table").parts(
	"root",
	"header",
	"body",
	"row",
	"columnHeader",
	"cell",
	"footer",
	"caption"
)

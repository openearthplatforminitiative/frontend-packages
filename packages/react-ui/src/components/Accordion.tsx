import { Accordion as ArkAccordion } from "@ark-ui/react"
import { createStyleContext } from "../utils/createStyleContext"
import { accordion, AccordionVariantProps } from "../../styled-system/recipes"
import { JsxStyleProps } from "../../styled-system/types"

const { withProvider, withContext } = createStyleContext(accordion)

export const Accordion = withProvider<
	HTMLDivElement,
	JsxStyleProps & ArkAccordion.RootProps & AccordionVariantProps
>(ArkAccordion.Root, "root")

export const AccordionItem = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkAccordion.ItemProps
>(ArkAccordion.Item, "item")

export const AccordionItemIndicator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkAccordion.ItemIndicatorProps
>(ArkAccordion.ItemIndicator, "itemIndicator")

export const AccordionItemTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkAccordion.ItemTriggerProps
>(ArkAccordion.ItemTrigger, "itemTrigger")

export const AccordionItemContent = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkAccordion.ItemContentProps
>(ArkAccordion.ItemContent, "itemContent")

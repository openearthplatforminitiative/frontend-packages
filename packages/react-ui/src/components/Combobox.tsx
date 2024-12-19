import { Combobox as ArkCombobox } from "@ark-ui/react"
import { createStyleContext } from "../utils/createStyleContext"
import { combobox, ComboboxVariantProps } from "../../styled-system/recipes"
import { JsxStyleProps } from "../../styled-system/types"

const { withProvider, withContext } = createStyleContext(combobox)

export type ComboboxRootProps<T extends ArkCombobox.CollectionItem> =
	JsxStyleProps & ArkCombobox.RootProps<T> & ComboboxVariantProps

export const Combobox = withProvider<
	HTMLDivElement,
	JsxStyleProps &
		ComboboxRootProps<ArkCombobox.CollectionItem> &
		ComboboxVariantProps
>(ArkCombobox.Root, "root")

Combobox.displayName = "Combobox"

export const ComboboxContent = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ContentProps
>(ArkCombobox.Content, "content")

export const ComboboxLabel = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.LabelProps
>(ArkCombobox.Label, "label")

export const ComboboxInput = withContext<
	HTMLInputElement,
	JsxStyleProps & ArkCombobox.InputProps
>(ArkCombobox.Input, "input")

export const ComboboxList = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ListProps
>(ArkCombobox.List, "list")

export const ComboboxTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.TriggerProps
>(ArkCombobox.Trigger, "trigger")

export const ComboboxPositioner = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.PositionerProps
>(ArkCombobox.Positioner, "positioner")

export const ComboboxControl = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ControlProps
>(ArkCombobox.Control, "control")

export const ComboboxClearTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ClearTriggerProps
>(ArkCombobox.ClearTrigger, "clearTrigger")

export const ComboboxItem = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ItemProps
>(ArkCombobox.Item, "item")

export const ComboboxItemGroup = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ItemGroupProps
>(ArkCombobox.ItemGroup, "itemGroup")

export const ComboboxItemGroupLabel = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ItemGroupLabelProps
>(ArkCombobox.ItemGroupLabel, "itemGroupLabel")

export const ComboboxItemIndicator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ItemIndicatorProps
>(ArkCombobox.ItemIndicator, "itemIndicator")

export const ComboboxItemText = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCombobox.ItemTextProps
>(ArkCombobox.ItemText, "itemText")

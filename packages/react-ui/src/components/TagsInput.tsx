import { JsxStyleProps } from "../../styled-system/types"
import { createStyleContext } from "../utils/createStyleContext"
import { TagsInput as ArkTagsInput } from "@ark-ui/react"
import { tagsInput, TagsInputVariantProps } from "../../styled-system/recipes"

const { withProvider, withContext } = createStyleContext(tagsInput)

export const TagsInput = withProvider<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.RootProps & TagsInputVariantProps
>(ArkTagsInput.Root, "root")

export const TagsInputContext = ArkTagsInput.Context

export const TagsInputInput = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.InputProps
>(ArkTagsInput.Input, "input")

export const TagsInputLabel = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.LabelProps
>(ArkTagsInput.Label, "label")

export const TagsInputControl = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ControlProps
>(ArkTagsInput.Control, "control")

export const TagsInputClearTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ClearTriggerProps
>(ArkTagsInput.ClearTrigger, "clearTrigger")

export const TagsInputItem = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ItemProps
>(ArkTagsInput.Item, "item")

export const TagsInputItemPreview = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ItemPreviewProps
>(ArkTagsInput.ItemPreview, "itemPreview")

export const TagsInputItemInput = withContext<
	HTMLInputElement,
	JsxStyleProps & ArkTagsInput.ItemInputProps
>(ArkTagsInput.ItemInput, "itemInput")

export const TagsInputItemText = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ItemTextProps
>(ArkTagsInput.ItemText, "itemText")

export const TagsInputItemDeleteTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ItemDeleteTriggerProps
>(ArkTagsInput.ItemDeleteTrigger, "itemDeleteTrigger")

export const TagsInputHiddenInput = ArkTagsInput.HiddenInput

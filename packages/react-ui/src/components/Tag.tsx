import { JsxStyleProps } from "../../styled-system/types"
import { createStyleContext } from "../utils/createStyleContext"
import { TagsInput as ArkTagsInput } from "@ark-ui/react"
import { tag, TagVariantProps } from "../../styled-system/recipes"

const { withProvider, withContext } = createStyleContext(tag)

export const Tag = withProvider<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ItemProps & TagVariantProps
>(ArkTagsInput.Item, "root")

export const TagPreview = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ItemPreviewProps
>(ArkTagsInput.ItemPreview, "preview")

export const TagInput = withContext<
	HTMLInputElement,
	JsxStyleProps & ArkTagsInput.ItemInputProps
>(ArkTagsInput.ItemInput, "input")

export const TagText = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ItemTextProps
>(ArkTagsInput.ItemText, "text")

export const TagDeleteTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkTagsInput.ItemDeleteTriggerProps
>(ArkTagsInput.ItemDeleteTrigger, "deleteTrigger")

export const TagsInputHiddenInput = ArkTagsInput.HiddenInput

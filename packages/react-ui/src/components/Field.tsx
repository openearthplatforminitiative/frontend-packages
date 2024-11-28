import { Field as ArkField } from "@ark-ui/react"
import { createStyleContext } from "../utils/createStyleContext"
import { field } from "../../styled-system/recipes"
import { JsxStyleProps } from "../../styled-system/types"

const { withProvider, withContext } = createStyleContext(field)

export const Field = withProvider<
	HTMLDivElement,
	JsxStyleProps & ArkField.RootProps
>(ArkField.Root, "root")

export const FieldLabel = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkField.LabelProps
>(ArkField.Label, "label")

export const FieldInput = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkField.InputProps
>(ArkField.Input, "input")

export const FieldSelect = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkField.SelectProps
>(ArkField.Select, "select")

export const FieldTextarea = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkField.TextareaProps
>(ArkField.Textarea, "textarea")

export const FieldErrorText = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkField.ErrorTextProps
>(ArkField.ErrorText, "errorText")

export const FieldHelperText = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkField.HelperTextProps
>(ArkField.HelperText, "helperText")

export const FieldRequiredIndicator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkField.RequiredIndicatorProps
>(ArkField.RequiredIndicator, "requiredIndicator")

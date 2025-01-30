"use client"

import { Checkbox as ArkCheckbox, useCheckboxContext } from "@ark-ui/react"
import { createStyleContext } from "../../utils/createStyleContext"
import {
	checkbox,
	type CheckboxVariantProps,
} from "@openepi/styled-system/recipes"
import { type JsxStyleProps } from "@openepi/styled-system/types"
import { styled } from "@openepi/styled-system/jsx"
import { Check, Remove } from "@openepi/icons"
import { Icon } from "../Icon/Icon"

const { withProvider, withContext } = createStyleContext(checkbox)

type CheckboxProps = JsxStyleProps &
	ArkCheckbox.RootProps &
	CheckboxVariantProps & {
		detachControl?: boolean
		detachHiddenInput?: boolean
		ref?: React.Ref<HTMLLabelElement>
	}

const BaseChecbox = (props: CheckboxProps) => {
	const { detachControl, detachHiddenInput, children, ...rest } = props
	return (
		<ArkCheckbox.Root {...rest}>
			{!detachControl && <CheckboxControl />}
			{!detachHiddenInput && <CheckboxHiddenInput />}
			{children}
		</ArkCheckbox.Root>
	)
}

export const Checkbox = withProvider<
	HTMLDivElement,
	JsxStyleProps & CheckboxProps
>(BaseChecbox, "root")

Checkbox.displayName = "Checkbox"

export const CheckboxGroup = styled(ArkCheckbox.Group, {
	base: {
		display: "flex",
		flexDirection: "column",
		gap: "2",
	},
})

CheckboxGroup.displayName = "CheckboxGroup"

export const CheckboxLabel = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCheckbox.LabelProps
>(ArkCheckbox.Label, "label")

type CheckboxControlProps = ArkCheckbox.ControlProps & {
	detachIndicator?: boolean
	detachIndeterminateIndicator?: boolean
	ref?: React.Ref<HTMLDivElement>
}

const BaseCheckboxControl = (props: CheckboxControlProps) => {
	const { detachIndeterminateIndicator, detachIndicator, children, ...rest } =
		props
	return (
		<ArkCheckbox.Control {...rest}>
			{!detachIndicator && <CheckboxIndicator />}
			{!detachIndeterminateIndicator && <CheckboxIndicator indeterminate />}
			{children}
		</ArkCheckbox.Control>
	)
}

export const CheckboxControl = withContext<
	HTMLDivElement,
	JsxStyleProps & CheckboxControlProps
>(BaseCheckboxControl, "control")

type CheckboxIndicatorProps = ArkCheckbox.IndicatorProps & {
	ref?: React.Ref<HTMLDivElement>
}

const BaseCheckboxIndicator = (props: CheckboxIndicatorProps) => {
	const api = useCheckboxContext()

	const indeterminate = props.indeterminate && api.indeterminate

	return (
		<ArkCheckbox.Indicator indeterminate={indeterminate} {...props}>
			{indeterminate ? (
				<Icon>
					<Remove />
				</Icon>
			) : (
				<Icon>
					<Check />
				</Icon>
			)}
		</ArkCheckbox.Indicator>
	)
}

export const CheckboxIndicator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCheckbox.IndicatorProps
>(BaseCheckboxIndicator, "indicator")

type CheckboxHiddenInputProps = ArkCheckbox.HiddenInputProps & {
	ref?: React.Ref<HTMLInputElement>
}

export const CheckboxHiddenInput = (props: CheckboxHiddenInputProps) => {
	return <ArkCheckbox.HiddenInput {...props} />
}

"use client"

import { Checkbox as ArkCheckbox, useCheckboxContext } from "@ark-ui/react"
import { createStyleContext } from "../../utils/createStyleContext"
import {
	checkbox,
	type CheckboxVariantProps,
} from "@openepi/styled-system/recipes"
import { type JsxStyleProps } from "@openepi/styled-system/types"
import { forwardRef } from "react"
import { styled } from "@openepi/styled-system/jsx"
import { Check, Remove } from "@openepi/icons"
import { Icon } from "../Icon/Icon"

const { withProvider, withContext } = createStyleContext(checkbox)

type CheckboxProps = JsxStyleProps &
	ArkCheckbox.RootProps &
	CheckboxVariantProps & {
		detachControl?: boolean
		detachHiddenInput?: boolean
	}

const BaseChecbox = forwardRef<HTMLLabelElement, CheckboxProps>(
	(props, ref) => {
		const { detachControl, detachHiddenInput, children, ...rest } = props
		return (
			<ArkCheckbox.Root ref={ref} {...rest}>
				{!detachControl && <CheckboxControl />}
				{!detachHiddenInput && <CheckboxHiddenInput />}
				{children}
			</ArkCheckbox.Root>
		)
	}
)

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
}

const BaseCheckboxControl = forwardRef<HTMLDivElement, CheckboxControlProps>(
	(props, ref) => {
		const { detachIndeterminateIndicator, detachIndicator, children, ...rest } =
			props
		return (
			<ArkCheckbox.Control ref={ref} {...rest}>
				{!detachIndicator && <CheckboxIndicator />}
				{!detachIndeterminateIndicator && <CheckboxIndicator indeterminate />}
				{children}
			</ArkCheckbox.Control>
		)
	}
)

export const CheckboxControl = withContext<
	HTMLDivElement,
	JsxStyleProps & CheckboxControlProps
>(BaseCheckboxControl, "control")

const BaseCheckboxIndicator = forwardRef<
	HTMLDivElement,
	ArkCheckbox.IndicatorProps
>((props, ref) => {
	const api = useCheckboxContext()

	const indeterminate = props.indeterminate && api.indeterminate

	return (
		<ArkCheckbox.Indicator ref={ref} indeterminate={indeterminate} {...props}>
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
})

export const CheckboxIndicator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkCheckbox.IndicatorProps
>(BaseCheckboxIndicator, "indicator")

export const CheckboxHiddenInput = forwardRef<
	HTMLInputElement,
	ArkCheckbox.HiddenInputProps
>((props, ref) => {
	return <ArkCheckbox.HiddenInput {...props} ref={ref} />
})

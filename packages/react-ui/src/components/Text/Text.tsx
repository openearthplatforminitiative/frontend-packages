"use client"

import { type HTMLStyledProps, styled } from "@openepi/styled-system/jsx"
import { text } from "@openepi/styled-system/recipes"

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

type TextProps = HTMLStyledProps<Variant> & {
	variant?: Variant
	as?: Variant
}

export const Text = (props: TextProps) => {
	const { variant: conditionalVariant, ...restProps } = props

	const variant: Variant = conditionalVariant ?? "p"

	const Tag = styled(variant, text) as React.ElementType

	return <Tag variant={variant} {...restProps} />
}

Text.displayName = "Text"

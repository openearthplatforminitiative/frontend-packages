import { ark } from "@ark-ui/react"
import { HTMLStyledProps, splitCssProps, styled } from "../../styled-system/jsx"
import { text, TextVariantProps } from "../../styled-system/recipes"
import { css } from "../../styled-system/css"

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

type BaseProps<T extends Variant> = HTMLStyledProps<T> & {
	variant: T
}

type TextProps = TextVariantProps &
	(
		| BaseProps<"h1">
		| BaseProps<"h2">
		| BaseProps<"h3">
		| BaseProps<"h4">
		| BaseProps<"h5">
		| BaseProps<"h6">
		| BaseProps<"p">
		| BaseProps<"span">
	)

export const Text = (props: TextProps) => {
	const [cssProps, restProps] = splitCssProps(props)
	const { variant, ...rest } = restProps
	const textVariant = variant as Variant

	const classes = text(restProps)

	const { css: cssProp, ...styleProps } = cssProps
	const className = `${css(styleProps, cssProp)} ${classes}`

	const Tag = textVariant
		? (styled[textVariant] as React.ElementType)
		: styled.p

	return <Tag className={className} variant={variant} {...rest} />
}

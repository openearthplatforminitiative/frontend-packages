"use client"

import { ark, type HTMLArkProps } from "@ark-ui/react"
import { createStyleContext } from "../../utils/createStyleContext"
import { type JsxStyleProps } from "@openepi/styled-system/types"
import { card } from "@openepi/styled-system/recipes"
import { styled } from "@openepi/styled-system/jsx"
import { Icon } from "../Icon/Icon"
import { ArrowForward, ArrowOutward } from "@openepi/icons"

const { withProvider, withContext } = createStyleContext(card)

interface CardProps extends HTMLArkProps<"div"> {
	external?: boolean
	ref?: React.Ref<HTMLDivElement>
}

interface CardSrcIconProps extends HTMLArkProps<"div"> {
	external?: boolean
	ref?: React.Ref<HTMLDivElement>
}

const baseCardSrcIcon = (props: CardSrcIconProps) => {
	const { external, ...rest } = props
	return (
		<ark.div {...rest}>
			{external ? (
				<Icon>
					<ArrowOutward />
				</Icon>
			) : (
				<Icon>
					<ArrowForward />
				</Icon>
			)}
		</ark.div>
	)
}

baseCardSrcIcon.displayName = "CardSrcIcon"
interface CardTitleProps extends HTMLArkProps<"span"> {
	children?: React.ReactNode
	external?: boolean
	ref?: React.Ref<HTMLSpanElement>
}

const baseCardTitle = (props: CardTitleProps) => {
	const { external, ...rest } = props
	return (
		<styled.span {...rest}>
			{props.children}
			<CardSrcIcon external={external} />
		</styled.span>
	)
}

baseCardTitle.displayName = "CardTitle"

export type CardOuterIconProps = HTMLArkProps<"div"> & {
	ref?: React.Ref<HTMLDivElement>
}

const baseCardOuterIcon = (props: CardOuterIconProps) => {
	const { children, ...rest } = props
	return <ark.div {...rest}>{children}</ark.div>
}

baseCardOuterIcon.displayName = "CardOuterIcon"

const BaseCard = (props: CardProps) => {
	const { external, ...rest } = props
	if (external) {
		return <ark.div data-external {...rest} />
	} else return <ark.div {...rest} />
}

BaseCard.displayName = "BaseCard"

export const Card = withProvider<HTMLDivElement, JsxStyleProps & CardProps>(
	BaseCard,
	"root"
)

Card.displayName = "Card"

export const CardContent = withProvider<
	HTMLLinkElement,
	JsxStyleProps & CardProps
>(ark.a, "content")

CardContent.displayName = "CardContent"

export const CardBody = withContext<
	HTMLDivElement,
	JsxStyleProps & HTMLArkProps<"div">
>(ark.div, "body")

CardBody.displayName = "CardBody"

export const CardOuterIcon = withContext<
	HTMLDivElement,
	JsxStyleProps & CardOuterIconProps
>(baseCardOuterIcon, "outerIcon")

CardOuterIcon.displayName = "CardOuterIcon"

const CardSrcIcon = withContext<
	HTMLDivElement,
	JsxStyleProps & CardSrcIconProps
>(baseCardSrcIcon, "srcIcon")

CardSrcIcon.displayName = "CardSrcIcon"

export const CardTitle = withContext<
	HTMLDivElement,
	JsxStyleProps & CardTitleProps
>(baseCardTitle, "title")

CardTitle.displayName = "CardTitle"

export const CardDescription = withContext<
	HTMLDivElement,
	JsxStyleProps & HTMLArkProps<"div">
>(ark.div, "description")

CardDescription.displayName = "CardDescription"

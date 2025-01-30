"use client"

import { ark, type HTMLArkProps } from "@ark-ui/react"
import { forwardRef } from "react"
import { createStyleContext } from "../../utils/createStyleContext"
import { type JsxStyleProps } from "@openepi/styled-system/types"
import { card } from "@openepi/styled-system/recipes"
import { styled } from "@openepi/styled-system/jsx"
import { Icon } from "../Icon/Icon"
import { ArrowForward, ArrowOutward, type IconName } from "@openepi/icons"

const { withProvider, withContext } = createStyleContext(card)

interface CardProps extends HTMLArkProps<"div"> {
	external?: boolean
}

interface CardSrcIconProps extends HTMLArkProps<"div"> {
	external?: boolean
}

const baseCardSrcIcon = forwardRef<HTMLDivElement, CardSrcIconProps>(
	(props, ref) => {
		const { external, ...rest } = props
		return (
			<ark.div ref={ref} {...rest}>
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
)

baseCardSrcIcon.displayName = "CardSrcIcon"
interface CardTitleProps extends HTMLArkProps<"span"> {
	children?: React.ReactNode
	external?: boolean
}

const baseCardTitle = forwardRef<HTMLSpanElement, CardTitleProps>(
	(props, ref) => {
		const { external, ...rest } = props
		return (
			<styled.span ref={ref} {...rest}>
				{props.children}
				<CardSrcIcon external={external} />
			</styled.span>
		)
	}
)

baseCardTitle.displayName = "CardTitle"

interface CardOuterIconWithIcon extends HTMLArkProps<"div"> {
	icon: IconName
	children?: never
}

interface CardOuterIconWithChildren extends HTMLArkProps<"div"> {
	icon?: never
	children: React.ReactNode
}

export type CardOuterIconProps =
	| CardOuterIconWithIcon
	| CardOuterIconWithChildren

const baseCardOuterIcon = forwardRef<HTMLDivElement, CardOuterIconProps>(
	(props, ref) => {
		const { icon, children, ...rest } = props
		return (
			<ark.div ref={ref} {...rest}>
				{children && !icon ? children : icon && <Icon name={icon} />}
			</ark.div>
		)
	}
)

baseCardOuterIcon.displayName = "CardOuterIcon"

const BaseCard = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const { external, ...rest } = props
	if (external) {
		return <ark.div ref={ref} data-external {...rest} />
	} else return <ark.div ref={ref} {...rest} />
})

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

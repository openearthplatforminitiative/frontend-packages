"use client"

import { styled } from "@openepi/styled-system/jsx"
import { iconButton } from "@openepi/styled-system/recipes"
import { ark, type HTMLArkProps } from "@ark-ui/react"
import { Icon } from "../Icon/Icon"
import { type IconName } from "@openepi/icons"
import { JSX } from "react"

interface IconComponent {
	children: JSX.Element
}

interface IconButtonName {
	iconName: IconName
}

type Icon = IconComponent | IconButtonName

type IconButtonProps = Omit<HTMLArkProps<"button">, "children"> &
	Icon & {
		loading?: boolean
		active?: boolean
		ref?: React.Ref<HTMLButtonElement>
	}

const isIconComponent = (props: Icon): props is IconComponent => {
	return (props as IconComponent).children !== undefined
}

const isIconButtonName = (props: Icon): props is IconButtonName => {
	return (props as IconButtonName).iconName !== undefined
}

const baseButton = (props: IconButtonProps) => {
	const { loading, active, ...rest } = props

	if (!isIconComponent(props) && !isIconButtonName(props)) {
		throw new Error("Either icon or iconName must be present")
	}

	return (
		<ark.button
			disabled={loading ? loading : false}
			data-active={active ? active : undefined}
			{...rest}
		>
			{loading ? (
				<Icon animation="spin" name="ProgressActivity" />
			) : isIconButtonName(props) ? (
				<Icon name={props.iconName} />
			) : (
				props.children
			)}
		</ark.button>
	)
}

baseButton.displayName = "BaseButton"

export const IconButton = styled(baseButton, iconButton)

IconButton.displayName = "IconButton"

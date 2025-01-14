"use client"

import { forwardRef, type ReactNode } from "react"
import { styled } from "../styled-system/jsx"
import { button } from "../styled-system/recipes/button"
import { ark, type HTMLArkProps } from "@ark-ui/react"
import { Icon } from "./Icon"
import { type IconName } from "@openepi/icons"

interface LeftComponent {
	leftComponent: ReactNode
}

interface RightComponent {
	rightComponent: ReactNode
}

interface LeftIcon {
	leftIcon: IconName
}

interface RightIcon {
	rightIcon: IconName
}

type Left = LeftComponent & Partial<LeftIcon>
type Right = RightComponent & Partial<RightIcon>

type ButtonProps = HTMLArkProps<"button"> &
	Partial<Left> &
	Partial<Right> & {
		loading?: boolean
		active?: boolean
		children: ReactNode
	}

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const {
		loading,
		disabled,
		active,
		leftComponent,
		leftIcon,
		rightComponent,
		rightIcon,
		...rest
	} = props
	return (
		<ark.button
			ref={ref}
			tabIndex={0}
			data-loading={loading ? loading : undefined}
			disabled={disabled ? disabled : false}
			data-active={active ? active : undefined}
			{...rest}
		>
			{loading ? (
				<Icon animation="spin" name="ProgressActivity" />
			) : leftIcon ? (
				<Icon name={leftIcon} />
			) : leftComponent ? (
				leftComponent
			) : null}
			{props.children}
			{rightIcon ? (
				<Icon name={rightIcon} />
			) : rightComponent ? (
				rightComponent
			) : null}
		</ark.button>
	)
})

BaseButton.displayName = "BaseButton"

export const Button = styled(BaseButton, button)

Button.displayName = "Button"

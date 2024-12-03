import { forwardRef, ReactNode } from "react"
import { styled } from "../styled-system/jsx"
import { button } from "../styled-system/recipes/button"
import { ark, HTMLArkProps } from "@ark-ui/react"
import { Icon } from "./Icon"
import { IconName } from "@openepi/icons"

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

const baseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
			tabIndex={0}
			ref={ref}
			{...rest}
			data-loading={loading ? loading : undefined}
			disabled={disabled ? disabled : false}
			data-active={active ? active : undefined}
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

baseButton.displayName = "BaseButton"

export const Button = styled(baseButton, button)

Button.displayName = "Button"

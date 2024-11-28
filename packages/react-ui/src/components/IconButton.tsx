import { forwardRef } from "react"
import { styled } from "../../styled-system/jsx"
import { iconButton } from "../../styled-system/recipes/icon-button"
import { ark, HTMLArkProps } from "@ark-ui/react"
import { Icon } from "./Icon"
import { IconName } from "@openepi/icons"

interface IconComponent {
	icon: JSX.Element
}

interface IconButtonName {
	iconName: IconName
}

type Icon = IconComponent | IconButtonName

type IconButtonProps = Omit<HTMLArkProps<"button">, "children"> &
	Icon & {
		loading?: boolean
		active?: boolean
	}

const isIconComponent = (props: Icon): props is IconComponent => {
	return (props as IconComponent).icon !== undefined
}

const isIconButtonName = (props: Icon): props is IconButtonName => {
	return (props as IconButtonName).iconName !== undefined
}

const baseButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	(props, ref) => {
		const { loading, active, ...rest } = props

		if (!isIconComponent(props) && !isIconButtonName(props)) {
			throw new Error("Either icon or iconName must be present")
		}

		return (
			<ark.button
				ref={ref}
				{...rest}
				tabIndex={0}
				disabled={loading ? loading : false}
				data-active={active ? active : undefined}
			>
				{loading ? (
					<Icon animation="spin" name="ProgressActivity" />
				) : isIconButtonName(props) ? (
					<Icon name={props.iconName} />
				) : (
					props.icon
				)}
			</ark.button>
		)
	}
)

baseButton.displayName = "BaseButton"

export const IconButton = styled(baseButton, iconButton)

IconButton.displayName = "IconButton"

"use client"

import { forwardRef } from "react"
import { styled } from "@openepi/styled-system/jsx"
import { button, ButtonVariantProps } from "@openepi/styled-system/recipes"
import { ark, type HTMLArkProps } from "@ark-ui/react"
import { Icon } from "../Icon/Icon"
import { JsxStyleProps } from "@openepi/styled-system/types"
import { ProgressActivity } from "@openepi/icons"

type ButtonProps = HTMLArkProps<"button"> &
	JsxStyleProps &
	ButtonVariantProps & {
		loading?: boolean
		active?: boolean
	}
const LoadingIcon = () => (
	<Icon animation="spin">
		<ProgressActivity />
	</Icon>
)

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { loading, active, ...rest } = props
	return (
		<ark.button
			ref={ref}
			data-loading={loading ? loading : undefined}
			data-active={active ? active : undefined}
			{...rest}
		>
			{!props.asChild && loading ? (
				<>
					<LoadingIcon /> {props.children}
				</>
			) : (
				props.children
			)}
		</ark.button>
	)
})

export const Button = styled(BaseButton, button)

Button.displayName = "Button"

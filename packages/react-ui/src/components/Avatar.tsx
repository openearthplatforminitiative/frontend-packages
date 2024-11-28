import { Avatar as ArkAvatar } from "@ark-ui/react"
import { avatar } from "../../styled-system/recipes/avatar"
import { forwardRef } from "react"
import { styled } from "../../styled-system/jsx/factory"
import { cx } from "../../styled-system/css/cx"
import { Icon } from "./Icon"

export interface AvatarProps extends ArkAvatar.RootProps {
	name?: string
	src?: string
}

export const Avatar = styled(
	forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
		const { name, src, ...rootProps } = props
		return (
			<ArkAvatar.Root
				ref={ref}
				{...rootProps}
				className={cx(
					avatar(avatar.splitVariantProps(props)[0])?.["root"],
					props.className
				)}
			>
				<ArkAvatar.Fallback
					className={cx(
						avatar(avatar.splitVariantProps(props)[0])?.["fallback"],
						props.className
					)}
				>
					{getInitials(name) || <Icon name="Person" />}
				</ArkAvatar.Fallback>
				<ArkAvatar.Image
					src={src}
					alt={name}
					className={cx(
						avatar(avatar.splitVariantProps(props)[0])?.["image"],
						props.className
					)}
				/>
			</ArkAvatar.Root>
		)
	})
)

const getInitials = (name = "") =>
	name
		.split(" ")
		.map((part) => part[0])
		.slice(0, 2)
		.join("")
		.toUpperCase()

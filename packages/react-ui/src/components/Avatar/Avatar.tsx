"use client"

import { Avatar as ArkAvatar } from "@ark-ui/react"
import { avatar } from "@openepi/styled-system/recipes"
import { forwardRef } from "react"
import { styled } from "@openepi/styled-system/jsx"
import { cx } from "@openepi/styled-system/css"
import { Person } from "@openepi/icons"
import { Icon } from "../Icon/Icon"
export interface AvatarProps extends ArkAvatar.RootProps {
	name?: string
	src?: string
}

const baseAvatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
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
				{getInitials(name) || (
					<Icon>
						<Person />
					</Icon>
				)}
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

baseAvatar.displayName = "Avatar"

export const Avatar = styled(baseAvatar, avatar)

const getInitials = (name = "") =>
	name
		.split(" ")
		.map((part) => part[0])
		.slice(0, 2)
		.join("")
		.toUpperCase()

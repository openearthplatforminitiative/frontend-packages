import { styled } from "../styled-system/jsx"
import { icon as iconRecipe } from "../styled-system/recipes"
import { ark, HTMLArkProps } from "@ark-ui/react"
import {
	Icon as IconComponent,
	IconProps as IconComponentProps,
} from "@openepi/icons"
import { IconVariantProps } from "../styled-system/recipes"
import { forwardRef } from "react"

type IconProps = HTMLArkProps<"div"> & IconVariantProps & IconComponentProps

const baseIcon = forwardRef<HTMLDivElement, IconProps>((props, ref) => {
	const { name, filled, ...rest } = props
	return (
		<ark.div asChild ref={ref} {...rest}>
			<IconComponent name={name} filled={filled} />
		</ark.div>
	)
})

baseIcon.displayName = "Icon"

export const Icon = styled(baseIcon, iconRecipe)
Icon.displayName = "Icon"

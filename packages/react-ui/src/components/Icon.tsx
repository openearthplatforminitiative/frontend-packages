import { styled } from "../../styled-system/jsx"
import { icon as iconRecipe } from "../../styled-system/recipes"
import { ark, HTMLArkProps } from "@ark-ui/react"
import {
	Icon as IconComponent,
	IconProps as IconComponentProps,
} from "@openepi/icons"
import { IconVariantProps } from "../../styled-system/recipes"
import { forwardRef } from "react"

type StaticIconProps = HTMLArkProps<"svg"> & {
	icon: JSX.Element
}

type DynamicIconProps = HTMLArkProps<"svg"> &
	IconVariantProps &
	IconComponentProps

type IconProps = StaticIconProps | DynamicIconProps

const baseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
	if ("icon" in props) {
		const { icon, ...rest } = props
		return (
			<ark.svg asChild ref={ref} {...rest}>
				{icon}
			</ark.svg>
		)
	} else {
		const { name, filled, ...rest } = props
		return (
			<ark.svg asChild ref={ref} {...rest}>
				<IconComponent name={name} filled={filled} />
			</ark.svg>
		)
	}
})
baseIcon.displayName = "Icon"

export const Icon = styled(baseIcon, iconRecipe)
Icon.displayName = "Icon"

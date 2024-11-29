import { styled } from "../../styled-system/jsx"
import { icon as iconRecipe } from "../../styled-system/recipes"
import { ark, HTMLArkProps } from "@ark-ui/react"
import {
	Icon as IconComponent,
	IconProps as IconComponentProps,
} from "@openepi/icons"
import { IconVariantProps } from "../../styled-system/recipes"

type IconProps = HTMLArkProps<"div"> & IconVariantProps & IconComponentProps

const baseIcon = ({ name, filled, ...props }: IconProps) => {
	return (
		<ark.div asChild {...props}>
			<IconComponent name={name} filled={filled} />
		</ark.div>
	)
}

export const Icon = styled(baseIcon, iconRecipe)
Icon.displayName = "Icon"

"use client"

import { styled } from "@openepi/styled-system/jsx"
import { icon as iconRecipe } from "@openepi/styled-system/recipes"
import {
	Icon as IconComponent,
	type IconProps as IconComponentProps,
} from "@openepi/icons"
import { type IconVariantProps } from "@openepi/styled-system/recipes"
import { cloneElement, forwardRef, isValidElement, ReactElement } from "react"
import { ark } from "@ark-ui/react"

type IconProps = Partial<IconVariantProps> &
	Partial<IconComponentProps> & {
		children?: ReactElement<SVGSVGElement>
	}

const baseIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
	const { children, name, filled, ...rest } = props

	if (isValidElement(children)) {
		return cloneElement(children, { ...rest })
	}
	if (name == null) {
		throw new Error("Either children or name must be present")
	}
	return (
		<ark.svg asChild ref={ref} {...rest}>
			<IconComponent name={name} filled={filled} />
		</ark.svg>
	)
})

export const Icon = styled(baseIcon, iconRecipe)

Icon.displayName = "Icon"

"use client"

import { Menu as ArkMenu, Portal } from "@ark-ui/react"
import { createStyleContext } from "../../utils/createStyleContext"
import { menu, type MenuVariantProps } from "@openepi/styled-system/recipes"
import { type JsxStyleProps } from "@openepi/styled-system/types"
import { type IconName } from "@openepi/icons"
import { Icon } from "../Icon/Icon"

const { withRootProvider, withContext } = createStyleContext(menu)

export const Menu = withRootProvider<ArkMenu.RootProps & MenuVariantProps>(
	ArkMenu.Root
)

export const MenuTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.TriggerProps
>(ArkMenu.Trigger, "trigger")

export const MenuIndicator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.IndicatorProps
>(ArkMenu.Indicator, "indicator")

const MenuPositioner = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.PositionerProps
>(ArkMenu.Positioner, "positioner")

const BaseMenuContent = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.ContentProps
>(ArkMenu.Content, "content")

export type MenuContentProps = {
	portalled?: boolean
	children: ReactNode
	ref?: React.Ref<HTMLDivElement>
}

export const MenuContent = ({
	portalled,
	children,
	...props
}: MenuContentProps) => {
	const content = (
		<MenuPositioner>
			<BaseMenuContent {...props}>{children}</BaseMenuContent>
		</MenuPositioner>
	)
	if (portalled) return <Portal>{content}</Portal>
	return content
}

MenuContent.displayName = "MenuContent"

export const MenuItemGroup = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.ItemGroupProps
>(ArkMenu.ItemGroup, "itemGroup")

export const MenuSeparator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.SeparatorProps
>(ArkMenu.Separator, "separator")

export const MenuItem = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.ItemProps
>(ArkMenu.Item, "item")

type baseMenuTriggerItemProps = JsxStyleProps &
	ArkMenu.TriggerItemProps & {
		icon?: IconName
		ref?: React.Ref<HTMLDivElement>
	}

const baseMenuTriggerItem = (props: baseMenuTriggerItemProps) => {
	const { children, icon, ...rest } = props
	const iconName = icon || "KeyboardArrowRight"
	return (
		<ArkMenu.TriggerItem {...rest}>
			{children}
			<Icon name={iconName} />
		</ArkMenu.TriggerItem>
	)
}

baseMenuTriggerItem.displayName = "MenuTriggerItem"

export const MenuTriggerItem = withContext<
	HTMLDivElement,
	JsxStyleProps & baseMenuTriggerItemProps
>(baseMenuTriggerItem, "triggerItem")

export const MenuItemIndicator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.ItemIndicatorProps
>(ArkMenu.ItemIndicator, "itemIndicator")

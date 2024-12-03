import { Menu as ArkMenu, Portal } from "@ark-ui/react"
import { createStyleContext } from "../utils/createStyleContext"
import { menu, MenuVariantProps } from "../styled-system/recipes"
import { JsxStyleProps } from "../styled-system/types"
import { forwardRef, ReactNode } from "react"
import { IconName } from "@openepi/icons"
import { Icon } from "./Icon"

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
}

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
	({ portalled, children, ...props }, ref) => {
		const content = (
			<MenuPositioner>
				<BaseMenuContent ref={ref} {...props}>
					{children}
				</BaseMenuContent>
			</MenuPositioner>
		)
		if (portalled) return <Portal>{content}</Portal>
		return content
	}
)

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
	}

const baseMenuTriggerItem = forwardRef<
	HTMLDivElement,
	baseMenuTriggerItemProps
>((props, ref) => {
	const { children, icon, ...rest } = props
	const iconName = icon || "KeyboardArrowRight"
	return (
		<ArkMenu.TriggerItem ref={ref} {...rest}>
			{children}
			<Icon name={iconName} />
		</ArkMenu.TriggerItem>
	)
})

baseMenuTriggerItem.displayName = "MenuTriggerItem"

export const MenuTriggerItem = withContext<
	HTMLDivElement,
	JsxStyleProps & baseMenuTriggerItemProps
>(baseMenuTriggerItem, "triggerItem")

export const MenuItemIndicator = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkMenu.ItemIndicatorProps
>(ArkMenu.ItemIndicator, "itemIndicator")

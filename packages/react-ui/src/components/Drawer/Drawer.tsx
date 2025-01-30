"use client"

import { type JsxStyleProps } from "@openepi/styled-system/types"
import { createStyleContext } from "../../utils/createStyleContext"
import { Dialog as ArkDrawer, type HTMLArkProps } from "@ark-ui/react"
import { drawer, type DrawerVariantProps } from "@openepi/styled-system/recipes"

const { withRootProvider, withContext } = createStyleContext(drawer)

export const Drawer = withRootProvider<
	ArkDrawer.RootProps & DrawerVariantProps
>(ArkDrawer.Root)

export const DrawerBackdrop = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDrawer.BackdropProps
>(ArkDrawer.Backdrop, "backdrop")

export const DrawerPositioner = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDrawer.PositionerProps
>(ArkDrawer.Positioner, "positioner")

export const DrawerTitle = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDrawer.TitleProps
>(ArkDrawer.Title, "title")

export const DrawerDescription = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDrawer.DescriptionProps
>(ArkDrawer.Description, "description")

export const DrawerHeader = withContext<
	HTMLDivElement,
	JsxStyleProps & HTMLArkProps<"div">
>("div", "header")

DrawerHeader.displayName = "DrawerHeader"

export const DrawerBody = withContext<
	HTMLDivElement,
	JsxStyleProps & HTMLArkProps<"div">
>("div", "body")

DrawerBody.displayName = "DrawerBody"

export const DrawerFooter = withContext<
	HTMLDivElement,
	JsxStyleProps & HTMLArkProps<"div">
>("div", "footer")

DrawerFooter.displayName = "DrawerFooter"

export const DrawerContent = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDrawer.ContentProps
>(ArkDrawer.Content, "content")

type DrawerWrapperProps = JsxStyleProps &
	ArkDrawer.ContentProps & {
		ref?: React.Ref<HTMLDivElement>
	}

const baseDrawerWrapper = (props: DrawerWrapperProps) => (
	<>
		<DrawerBackdrop />
		<DrawerPositioner>
			<DrawerContent {...props} />
		</DrawerPositioner>
	</>
)

baseDrawerWrapper.displayName = "DrawerWrapper"

export const DrawerWrapper = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDrawer.ContentProps
>(baseDrawerWrapper, "content")

export const DrawerCloseTrigger = withContext<
	HTMLButtonElement,
	JsxStyleProps & ArkDrawer.CloseTriggerProps
>(ArkDrawer.CloseTrigger, "closeTrigger")

export const DrawerTrigger = withContext<
	HTMLButtonElement,
	JsxStyleProps & ArkDrawer.TriggerProps
>(ArkDrawer.Trigger, "trigger")

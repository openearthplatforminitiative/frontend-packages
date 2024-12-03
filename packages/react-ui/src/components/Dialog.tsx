import { JsxStyleProps } from "../styled-system/types"
import { createStyleContext } from "../utils/createStyleContext"
import { Dialog as ArkDialog, HTMLArkProps } from "@ark-ui/react"
import { dialog, DialogVariantProps } from "../styled-system/recipes"

const { withRootProvider, withContext } = createStyleContext(dialog)

export const Dialog = withRootProvider<
	ArkDialog.RootProps & DialogVariantProps
>(ArkDialog.Root)

export const DialogBackdrop = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDialog.BackdropProps
>(ArkDialog.Backdrop, "backdrop")

export const DialogPositioner = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDialog.PositionerProps
>(ArkDialog.Positioner, "positioner")

export const DialogTitle = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDialog.TitleProps
>(ArkDialog.Title, "title")

export const DialogDescription = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDialog.DescriptionProps
>(ArkDialog.Description, "description")

export const DialogHeader = withContext<
	HTMLDivElement,
	JsxStyleProps & HTMLArkProps<"div">
>("div", "header")

DialogHeader.displayName = "DialogHeader"

export const DialogBody = withContext<
	HTMLDivElement,
	JsxStyleProps & HTMLArkProps<"div">
>("div", "body")

DialogBody.displayName = "DialogBody"

export const DialogFooter = withContext<
	HTMLDivElement,
	JsxStyleProps & HTMLArkProps<"div">
>("div", "footer")

DialogFooter.displayName = "DialogFooter"

export const DialogContent = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDialog.ContentProps
>(ArkDialog.Content, "content")

export const DialogCloseTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDialog.CloseTriggerProps
>(ArkDialog.CloseTrigger, "closeTrigger")

export const DialogTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkDialog.TriggerProps
>(ArkDialog.Trigger, "trigger")

import {
	Toast as ArkToast,
	Toaster as ArkToaster,
	ToasterProps,
	createToaster as arkCreateToaster,
} from "@ark-ui/react"
import { createStyleContext } from "../utils/createStyleContext"
import { CreateToasterProps } from "@ark-ui/react"
import { toast } from "../../styled-system/recipes"
import { JsxStyleProps } from "../../styled-system/types"
import { forwardRef } from "react"

export const createToaster = (props: CreateToasterProps) =>
	arkCreateToaster(props)

const { withProvider, withContext } = createStyleContext(toast)

export const Toaster = forwardRef<HTMLDivElement, ToasterProps>(
	(props, ref) => <ArkToaster {...props} ref={ref} />
)

Toaster.displayName = "Toaster"

export const Toast = withProvider<
	HTMLDivElement,
	JsxStyleProps & ArkToast.RootProps
>(ArkToast.Root, "root")

export const ToastTitle = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkToast.TitleProps
>(ArkToast.Title, "title")

export const ToastDescription = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkToast.DescriptionProps
>(ArkToast.Description, "description")

export const ToastActionTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkToast.ActionTriggerProps
>(ArkToast.ActionTrigger, "actionTrigger")

export const ToastCloseTrigger = withContext<
	HTMLDivElement,
	JsxStyleProps & ArkToast.CloseTriggerProps
>(ArkToast.CloseTrigger, "closeTrigger")

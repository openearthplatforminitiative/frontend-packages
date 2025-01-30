"use client"

import {
	Toast as ArkToast,
	Toaster as ArkToaster,
	type ToasterProps as ArkToasterProps,
	createToaster as arkCreateToaster,
} from "@ark-ui/react"
import { createStyleContext } from "../../utils/createStyleContext"
import type { CreateToasterProps } from "@ark-ui/react"
import { toast } from "@openepi/styled-system/recipes"
import type { JsxStyleProps } from "@openepi/styled-system/types"

export const createToaster = (props: CreateToasterProps) =>
	arkCreateToaster(props)

type ToasterProps = ArkToasterProps & {
	ref?: React.Ref<HTMLDivElement>
}

const { withProvider, withContext } = createStyleContext(toast)

export const Toaster = (props: ToasterProps) => <ArkToaster {...props} />

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

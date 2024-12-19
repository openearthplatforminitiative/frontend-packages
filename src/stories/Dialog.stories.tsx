import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Button } from "@openepi/react-ui/Button"
import { IconButton } from "@openepi/react-ui/IconButton"
import { Close } from "@openepi/icons/icons"
import {
	Dialog,
	DialogBackdrop,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPositioner,
	DialogTitle,
	DialogTrigger,
	DialogWrapper,
} from "@openepi/react-ui/Dialog"
import { Portal } from "@openepi/react-ui/Portal"
import { Stack } from "../../styled-system/jsx"

const meta: Meta<typeof Dialog> = {
	title: "Components/Dialog",
	component: Dialog,
	tags: ["autodocs"],
	argTypes: {
		placement: {
			control: "select",
			default: "top",
			options: ["top", "bottom", "center"],
		},
		size: {
			control: "select",
			default: "md",
			options: ["xs", "sm", "md", "lg", "xl", "cover", "full"],
		},
		motionPreset: {
			control: "select",
			default: "scale",
			options: [
				"scale",
				"slide-in-bottom",
				"slide-in-top",
				"slide-in-left",
				"slide-in-right",
				"none",
			],
		},
	},
	parameters: {
		placement: {
			default: "top",
		},
	},
	render: (args) => (
		<Dialog {...args}>
			<DialogTrigger asChild>
				<Button>Open dialog</Button>
			</DialogTrigger>
			<Portal>
				<DialogWrapper>
					<DialogCloseTrigger asChild>
						<IconButton
							icon={<Close />}
							colorPalette="gray"
							variant="ghost"
							size="md"
						/>
					</DialogCloseTrigger>
					<DialogHeader>
						<DialogTitle>This is a title</DialogTitle>
					</DialogHeader>
					<DialogBody>
						<DialogDescription>This is a description</DialogDescription>
					</DialogBody>
					<DialogFooter>
						<Stack direction="row-reverse">
							<Button>Save</Button>
							<Button colorPalette="gray" variant="outline">
								Cancel
							</Button>
						</Stack>
					</DialogFooter>
				</DialogWrapper>
			</Portal>
		</Dialog>
	),
}
export default meta

export const Default: StoryObj = {}

export const WithoutWrapper: StoryFn<typeof Dialog> = (args) => (
	<Dialog {...args}>
		<DialogTrigger asChild>
			<Button>Open dialog</Button>
		</DialogTrigger>
		<Portal>
			<DialogBackdrop />
			<DialogPositioner>
				<DialogContent>
					<DialogCloseTrigger asChild>
						<IconButton
							icon={<Close />}
							colorPalette="gray"
							variant="ghost"
							size="md"
						/>
					</DialogCloseTrigger>
					<DialogHeader>
						<DialogTitle>This is a title</DialogTitle>
					</DialogHeader>
					<DialogBody>
						<DialogDescription>This is a description</DialogDescription>
					</DialogBody>
					<DialogFooter>
						<Stack direction="row-reverse">
							<Button>Save</Button>
							<Button colorPalette="gray" variant="outline">
								Cancel
							</Button>
						</Stack>
					</DialogFooter>
				</DialogContent>
			</DialogPositioner>
		</Portal>
	</Dialog>
)

export const DeleteConfirmation: StoryFn<typeof Dialog> = (args) => (
	<Dialog {...args}>
		<DialogTrigger asChild>
			<Button colorPalette="error" rightIcon="Close">
				Delete item
			</Button>
		</DialogTrigger>
		<Portal>
			<DialogWrapper>
				<DialogCloseTrigger asChild>
					<IconButton
						icon={<Close />}
						colorPalette="gray"
						variant="ghost"
						size="md"
						onClick={(e) => {
							console.log(e)
						}}
					/>
				</DialogCloseTrigger>
				<DialogHeader>
					<DialogTitle>Delete item</DialogTitle>
				</DialogHeader>
				<DialogBody>
					<DialogDescription>
						Are you sure you want to delete this item?
					</DialogDescription>
				</DialogBody>
				<DialogFooter>
					<Stack direction="row-reverse">
						<Button colorPalette="error" rightIcon="Close">
							Delete
						</Button>
						<Button colorPalette="gray" variant="outline">
							Cancel
						</Button>
					</Stack>
				</DialogFooter>
			</DialogWrapper>
		</Portal>
	</Dialog>
)

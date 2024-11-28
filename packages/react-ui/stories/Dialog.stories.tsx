import { Meta, StoryObj } from "@storybook/react"
import { Button } from "../src/components/Button"
import { IconButton } from "../src/components/IconButton"
import Close from "@openepi/icons/icons/Close"
import {
	Dialog,
	DialogBackdrop,
	DialogBody,
	DialogCloseTrigger,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogPositioner,
	DialogTitle,
	DialogTrigger,
} from "../src/components/Dialog"
import { Portal } from "../src/components/Portal"

const meta: Meta<typeof Dialog> = {
	title: "Components/Dialog",
	component: Dialog,
	tags: ["autodocs"],
	render: (args) => (
		<Dialog>
			<DialogTrigger>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<Portal>
				<DialogBackdrop />
				<DialogPositioner>
					<DialogContent>
						<DialogCloseTrigger>
							<IconButton icon={<Close />} variant="ghost" size="md" />
						</DialogCloseTrigger>
						<DialogHeader>
							<DialogTitle>Dialog Title</DialogTitle>
						</DialogHeader>
						<DialogBody>
							<DialogDescription>Dialog Description</DialogDescription>
						</DialogBody>
					</DialogContent>
				</DialogPositioner>
			</Portal>
		</Dialog>
	),
}
export default meta

export const Default: StoryObj<typeof Dialog> = {}

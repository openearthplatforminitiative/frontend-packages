import { Meta, StoryObj } from "@storybook/react"
import {
	createToaster,
	Toast,
	ToastCloseTrigger,
	ToastDescription,
	Toaster,
	ToastTitle,
} from "@openepi/react-ui/Toast"
import { Button } from "@openepi/react-ui/Button"
import { Portal } from "@ark-ui/react"
import { IconButton } from "@openepi/react-ui/IconButton"
import Close from "@openepi/icons/icons/Close"

const meta: Meta<typeof Toast> = {
	title: "Components/Toast",
	component: Toast,
	tags: ["autodocs"],
	render: () => {
		const toaster = createToaster({
			placement: "bottom",
			overlap: true,
			gap: 24,
		})
		return (
			<>
				<Button
					size="md"
					onClick={() =>
						toaster.create({
							title: "Toast Title",
							description: "Toast Description",
							type: "loading",
						})
					}
				>
					Add Toast
				</Button>
				<Portal>
					<Toaster toaster={toaster}>
						{(toast) => (
							<Toast key={toast.id}>
								<ToastTitle>{toast.title}</ToastTitle>
								<ToastDescription>{toast.description}</ToastDescription>
								<ToastCloseTrigger>
									<IconButton icon={<Close />} size="sm" variant="ghost" />
								</ToastCloseTrigger>
							</Toast>
						)}
					</Toaster>
				</Portal>
			</>
		)
	},
}

export default meta

export const Default: StoryObj<typeof Toaster> = {}

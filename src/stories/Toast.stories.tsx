import { type Meta, type StoryObj } from "@storybook/react"
import { ArgTypes, Source, Primary, Title, Controls } from "@storybook/blocks"
import {
	createToaster,
	Toast,
	ToastCloseTrigger,
	ToastDescription,
	Toaster,
	ToastTitle,
} from "@openepi/react-ui"
import { Button } from "@openepi/react-ui"
import { Portal } from "@ark-ui/react"
import { IconButton, Icon } from "@openepi/react-ui"
import {
	Check,
	Close,
	Info,
	ProgressActivity,
	Warning,
	Error,
} from "@openepi/icons"
import { Box, HStack, Stack } from "@openepi/styled-system/jsx"

const toaster = createToaster({
	placement: "bottom-end",
	gap: 12,
})

const meta: Meta<typeof toaster.create> = {
	title: "Components/Toast",
	component: toaster.create,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			description: "Controls the visual style of the button",
			options: ["success", "error", "warning", "info", "loading"],
		},
		title: {
			control: "text",
			description: "Title of the toast",
		},
		description: {
			control: "text",
			description: "Description of the toast",
		},
	},
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<Primary />
					<Controls />
					<Source code={Code} language="tsx" />
				</>
			),
		},
		source: {
			code: `Heisann`,
		},
	},

	args: {
		type: "info",
		title: "Toast Title",
		description: "Toast Description",
	},
	render: (args) => {
		return (
			<Box>
				<Button
					size="md"
					onClick={() =>
						toaster.create({
							title: args.title,
							description: args.description,
							type: args.type,
							action: {
								label: "Undo",
								onClick: () => {},
							},
						})
					}
				>
					Add Toast
				</Button>
				<Portal>
					<Toaster toaster={toaster}>
						{(toast) => (
							<Toast key={toast.id}>
								<Box>
									<HStack alignItems="start">
										{toast.type === "loading" ? (
											<Icon fontSize="2xl" animation="spin">
												<ProgressActivity />
											</Icon>
										) : toast.type === "success" ? (
											<Icon fontSize="2xl">
												<Check />
											</Icon>
										) : toast.type === "error" ? (
											<Icon fontSize="2xl">
												<Error />
											</Icon>
										) : toast.type === "warning" ? (
											<Icon fontSize="2xl">
												<Warning />
											</Icon>
										) : undefined}
										<Stack>
											<ToastTitle>{toast.title}</ToastTitle>
											<ToastDescription>{toast.description}</ToastDescription>
										</Stack>
									</HStack>
								</Box>
								<ToastCloseTrigger asChild>
									<IconButton colorPalette="gray" size="sm" variant="ghost">
										<Icon>
											<Close />
										</Icon>
									</IconButton>
								</ToastCloseTrigger>
							</Toast>
						)}
					</Toaster>
				</Portal>
			</Box>
		)
	},
}

export default meta

export const Default: StoryObj<typeof Toaster> = {}

const Code = `
const toaster = createToaster({
		placement: "bottom-end",
		gap: 12,
	})

	return (
		<>
			<Button
				size="md"
				onClick={() =>
					toaster.create({
						title: args.title,
						description: args.description,
						type: args.type,
						action: {
							label: "Undo",
							onClick: () => {},
						},
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
							<ToastCloseTrigger asChild>
								<IconButton colorPalette="gray" size="sm" variant="subtle">
									<Icon>
										<Close />
									</Icon>
								</IconButton>
							</ToastCloseTrigger>
						</Toast>
					)}
				</Toaster>
			</Portal>
		</>
	)
`

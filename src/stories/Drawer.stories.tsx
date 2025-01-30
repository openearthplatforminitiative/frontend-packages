import { type Meta, type StoryFn, type StoryObj } from "@storybook/react"
import { Button } from "@openepi/react-ui"
import { IconButton } from "@openepi/react-ui"
import { ArrowOutward, Close, Menu } from "@openepi/icons"
import {
	Drawer,
	DrawerBackdrop,
	DrawerBody,
	DrawerCloseTrigger,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPositioner,
	DrawerTitle,
	DrawerTrigger,
	DrawerWrapper,
} from "@openepi/react-ui"
import { Portal } from "@openepi/react-ui"
import { Stack, VStack } from "@openepi/styled-system/jsx"
import { Icon } from "@openepi/react-ui"

const meta: Meta<typeof Drawer> = {
	title: "Components/Drawer",
	component: Drawer,
	tags: ["autodocs"],
	argTypes: {
		placement: {
			control: "select",
			default: "right",
			options: ["top", "left", "bottom", "right"],
		},
		size: {
			control: "select",
			default: "md",
			options: ["xs", "sm", "md", "lg", "xl", "cover", "full"],
		},
	},
	parameters: {
		placement: {
			default: "top",
		},
	},
	render: (args) => (
		<Drawer {...args}>
			<DrawerTrigger asChild>
				<Button>Open Drawer</Button>
			</DrawerTrigger>
			<Portal>
				<DrawerWrapper>
					<DrawerCloseTrigger asChild>
						<IconButton colorPalette="gray" variant="ghost" size="md">
							<Icon>
								<Close />
							</Icon>
						</IconButton>
					</DrawerCloseTrigger>
					<DrawerHeader>
						<DrawerTitle>This is a title</DrawerTitle>
					</DrawerHeader>
					<DrawerBody>
						<DrawerDescription>This is a description</DrawerDescription>
					</DrawerBody>
					<DrawerFooter>
						<Stack direction="row-reverse">
							<Button>Save</Button>
							<Button colorPalette="gray" variant="outline">
								Cancel
							</Button>
						</Stack>
					</DrawerFooter>
				</DrawerWrapper>
			</Portal>
		</Drawer>
	),
}
export default meta

export const Default: StoryObj = {}

export const MenuWrapper: StoryFn<typeof Drawer> = (args) => (
	<Drawer {...args} size="xs">
		<DrawerTrigger asChild>
			<Button
				variant="ghost"
				colorPalette="gray"
				onClick={(e) => console.log(e)}
			>
				<Icon fontSize="28px">
					<Menu />
				</Icon>
				Menu
			</Button>
		</DrawerTrigger>
		<Portal>
			<DrawerWrapper bg="gray.50">
				<DrawerHeader></DrawerHeader>
				<DrawerBody>
					<nav>
						<VStack alignItems="flex-start">
							<Button variant="ghost" colorPalette="secondary" active>
								Home
							</Button>
							<Button variant="ghost" colorPalette="secondary">
								About
							</Button>
							<Button variant="ghost" colorPalette="secondary">
								Contact
							</Button>
							<Button variant="ghost" colorPalette="secondary">
								Link to somewhere
								<Icon>
									<ArrowOutward />
								</Icon>
							</Button>
						</VStack>
					</nav>
					<DrawerCloseTrigger asChild>
						<IconButton colorPalette="gray" variant="ghost" size="md">
							<Icon>
								<Close />
							</Icon>
						</IconButton>
					</DrawerCloseTrigger>
				</DrawerBody>
			</DrawerWrapper>
		</Portal>
	</Drawer>
)

export const WithoutWrapper: StoryFn<typeof Drawer> = (args) => (
	<Drawer {...args}>
		<DrawerTrigger asChild>
			<Button>Open Drawer</Button>
		</DrawerTrigger>
		<Portal>
			<DrawerBackdrop />
			<DrawerPositioner>
				<DrawerContent>
					<DrawerCloseTrigger asChild>
						<IconButton colorPalette="gray" variant="ghost" size="md">
							<Icon>
								<Close />
							</Icon>
						</IconButton>
					</DrawerCloseTrigger>
					<DrawerHeader>
						<DrawerTitle>This is a title</DrawerTitle>
					</DrawerHeader>
					<DrawerBody>
						<DrawerDescription>This is a description</DrawerDescription>
					</DrawerBody>
					<DrawerFooter>
						<Stack direction="row-reverse">
							<Button>Save</Button>
							<Button colorPalette="gray" variant="outline">
								Cancel
							</Button>
						</Stack>
					</DrawerFooter>
				</DrawerContent>
			</DrawerPositioner>
		</Portal>
	</Drawer>
)

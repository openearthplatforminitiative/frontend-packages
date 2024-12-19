import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Button } from "@openepi/react-ui/Button"
import { IconButton } from "@openepi/react-ui/IconButton"
import { ArrowOutward, Close, Menu } from "@openepi/icons/icons"
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
} from "@openepi/react-ui/Drawer"
import { Portal } from "@openepi/react-ui/Portal"
import { Stack, VStack } from "../../styled-system/jsx"
import { Icon } from "@openepi/react-ui/Icon"

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
						<IconButton
							icon={<Close />}
							colorPalette="gray"
							variant="ghost"
							size="md"
						/>
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
				leftComponent={<Icon fontSize="28px" icon={<Menu />} />}
				onClick={(e) => console.log(e)}
			>
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
							<Button
								variant="ghost"
								colorPalette="secondary"
								rightComponent={<Icon icon={<ArrowOutward />} />}
							>
								Link to somewhere
							</Button>
						</VStack>
					</nav>
					<DrawerCloseTrigger asChild>
						<IconButton
							icon={<Close />}
							colorPalette="gray"
							variant="ghost"
							size="md"
						/>
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
						<IconButton
							icon={<Close />}
							colorPalette="gray"
							variant="ghost"
							size="md"
						/>
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

export const MobileDrawer: StoryFn<typeof Drawer> = (args) => (
	<Drawer {...args} placement="bottom">
		<DrawerTrigger asChild>
			<Button colorPalette="error" rightIcon="Close">
				Delete item
			</Button>
		</DrawerTrigger>
		<Portal>
			<DrawerWrapper>
				<DrawerCloseTrigger
					w="md"
					h="5px"
					borderRadius="full"
					right={0}
					left={0}
					marginInline="auto"
					bg="gray.solid"
				>
					<IconButton
						icon={<Close />}
						size="md"
						colorPalette="gray"
						variant="plain"
					/>
				</DrawerCloseTrigger>
				<DrawerHeader>
					<DrawerTitle>Delete item</DrawerTitle>
				</DrawerHeader>
				<DrawerBody>
					<DrawerDescription>
						Are you sure you want to delete this item?
					</DrawerDescription>
				</DrawerBody>
				<DrawerFooter>
					<Stack direction="row-reverse">
						<Button colorPalette="error" rightIcon="Close">
							Delete
						</Button>
						<Button colorPalette="gray" variant="outline">
							Cancel
						</Button>
					</Stack>
				</DrawerFooter>
			</DrawerWrapper>
		</Portal>
	</Drawer>
)

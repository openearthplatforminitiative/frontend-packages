import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
	Menu,
	MenuContent,
	MenuItem,
	MenuTrigger,
	MenuIndicator,
	MenuSeparator,
	MenuTriggerItem,
} from "@openepi/react-ui/Menu"
import { Button } from "@openepi/react-ui/Button"
import { Icon } from "@openepi/react-ui/Icon"
import { IconButton } from "@openepi/react-ui/IconButton"
import {
	Handshake,
	Home,
	Flag2,
	Stacks,
	Menu as MenuIcon,
	Logout,
	Code,
	ArrowOutward,
	MoreHoriz,
	FileCopy,
	Edit,
	ArrowForward,
	Close,
} from "@openepi/icons/icons"

const meta: Meta<typeof Menu> = {
	title: "Components/Menu",
	component: Menu,
	tags: ["autodocs"],
	render: () => (
		<Menu positioning={{ placement: "bottom-end" }}>
			<MenuTrigger asChild>
				<Button
					rightComponent={
						<MenuIndicator>
							<Icon name="KeyboardArrowDown" />
						</MenuIndicator>
					}
				>
					Menu
				</Button>
			</MenuTrigger>
			<MenuContent portalled>
				<MenuItem value="react">React</MenuItem>
				<MenuItem value="solid">Solid</MenuItem>
				<MenuSeparator />
				<MenuItem value="vue">Vue</MenuItem>
			</MenuContent>
		</Menu>
	),
}

export default meta

export const Default: StoryObj<typeof Menu> = {}

export const NestedMenu: StoryFn<typeof Menu> = () => (
	<Menu positioning={{ placement: "bottom-end" }}>
		<MenuTrigger asChild>
			<Button
				rightComponent={
					<MenuIndicator>
						<Icon name="KeyboardArrowDown" />
					</MenuIndicator>
				}
			>
				Menu
			</Button>
		</MenuTrigger>
		<MenuContent>
			<MenuItem value="react">React</MenuItem>
			<MenuItem value="solid">Solid</MenuItem>
			<MenuSeparator />
			<MenuItem value="vue">Vue</MenuItem>
			<Menu positioning={{ placement: "right-start" }}>
				<MenuTriggerItem>Angular</MenuTriggerItem>
				<MenuContent portalled>
					<MenuItem value="angularjs">AngularJS</MenuItem>
					<MenuItem value="angular2">Angular 2</MenuItem>
					<MenuSeparator />
					<Menu positioning={{ placement: "right-start" }}>
						<MenuTriggerItem>Angular 4</MenuTriggerItem>
						<MenuContent portalled>
							<MenuItem value="angularjs">Angular 4.0</MenuItem>
							<MenuItem value="angular2">Angular 4.1</MenuItem>
						</MenuContent>
					</Menu>
				</MenuContent>
			</Menu>
		</MenuContent>
	</Menu>
)

export const HamburgerMenu: StoryFn<typeof Menu> = () => (
	<Menu positioning={{ placement: "bottom-end" }}>
		<MenuTrigger asChild>
			<IconButton icon={<MenuIcon />} variant="plain" />
		</MenuTrigger>
		<MenuContent portalled>
			<MenuItem value="home">
				<Home />
				Home
			</MenuItem>
			<MenuItem value="about">
				<Flag2 />
				About us
			</MenuItem>
			<MenuItem value="involved">
				<Handshake />
				Get involved
			</MenuItem>
			<MenuItem value="resources">
				<Stacks />
				Resources
			</MenuItem>
			<MenuItem value="code">
				<Code />
				For developers
				<ArrowOutward />
			</MenuItem>
		</MenuContent>
	</Menu>
)

export const ActionMenu: StoryFn<typeof Menu> = () => (
	<Menu positioning={{ placement: "bottom-end" }}>
		<MenuTrigger asChild>
			<IconButton icon={<MoreHoriz />} variant="subtle" colorPalette="gray" />
		</MenuTrigger>
		<MenuContent portalled>
			<MenuItem value="open">
				<ArrowForward />
				Open
			</MenuItem>
			<MenuItem value="edit">
				<Edit />
				Edit
			</MenuItem>
			<MenuItem value="duplicate">
				<FileCopy />
				Duplicate
			</MenuItem>
			<MenuSeparator />
			<MenuItem
				bg="red.200"
				color="red.800"
				fill="red.800"
				_hover={{ bg: "red.100" }}
				_highlighted={{ bg: "red.100" }}
				value="delete"
			>
				<Close />
				Delete
			</MenuItem>
		</MenuContent>
	</Menu>
)

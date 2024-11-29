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

const meta: Meta<typeof Menu> = {
	title: "Components/Menu",
	component: Menu,
	tags: ["autodocs"],
	render: () => (
		<Menu positioning={{ placement: "bottom-end" }}>
			<MenuTrigger asChild>
				<Button
					variant="outline"
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

export const InnerMenu: StoryFn<typeof Menu> = () => (
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
			<Menu positioning={{ placement: "right-start" }}>
				<MenuTriggerItem>Angular</MenuTriggerItem>
				<MenuContent>
					<MenuItem value="angularjs">AngularJS</MenuItem>
					<MenuItem value="angular2">Angular 2</MenuItem>
					<MenuSeparator />
					<MenuItem value="angular4">Angular 4</MenuItem>
				</MenuContent>
			</Menu>
		</MenuContent>
	</Menu>
)

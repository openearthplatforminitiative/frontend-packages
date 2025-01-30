import { type Meta, type StoryFn, type StoryObj } from "@storybook/react"
import { Icon } from "@openepi/react-ui"

const meta: Meta<typeof Icon> = {
	title: "Components/Icon",
	component: Icon,
	tags: ["autodocs"],
	argTypes: {
		name: {
			control: "text",
			defaultValue: "waves",
		},
	},
	args: {
		name: "Favorite",
	},
	render: (args) => <Icon fontSize="48px" {...args} />,
}

export default meta

export const Default: StoryObj<typeof Icon> = {}

export const Spinning: StoryFn<typeof Icon> = (args) => (
	<Icon fontSize="48px" name="ProgressActivity" animation="spin" />
)

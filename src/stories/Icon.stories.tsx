import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Icon } from "@openepi/react-ui/Icon"

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
	render: (args) => <Icon fontSize="48px" {...args} name={args.name} />,
}

export default meta

export const Default: StoryObj<typeof Icon> = {}

export const NotSpinning: StoryFn<typeof Icon> = (args) => (
	<Icon fontSize="48px" {...args} name="ProgressActivity" />
)

export const Spinning: StoryFn<typeof Icon> = (args) => (
	<Icon
		fontSize="48px"
		name={args.name ?? "ProgressActivity"}
		{...args}
		animation="spin"
	/>
)

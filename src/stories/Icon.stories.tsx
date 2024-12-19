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
	render: (args) => <Icon fontSize="48px" {...args} />,
}

export default meta

export const Default: StoryObj<typeof Icon> = {}

export const NotSpinning: StoryFn<typeof Icon> = (args) => (
	<Icon fontSize="48px" name="ProgressActivity" {...args} />
)

export const Spinning: StoryFn<typeof Icon> = (args) => (
	<Icon
		fontSize="48px"
		name={args.name ?? "ProgressActivity"}
		animation="spin"
		{...args}
	/>
)

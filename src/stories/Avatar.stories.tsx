import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Avatar } from "@openepi/react-ui/Avatar"

const meta: Meta<typeof Avatar> = {
	title: "Components/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	render: (args) => <Avatar {...args} />,
}

export default meta

export const Default: StoryObj<typeof Avatar> = {}

export const Image: StoryFn<typeof Avatar> = (args) => (
	<Avatar {...args} src="https://i.pravatar.cc/300" />
)

export const NameFallback: StoryFn<typeof Avatar> = (args) => (
	<Avatar {...args} name="John Smith" />
)
export const Fallback: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />

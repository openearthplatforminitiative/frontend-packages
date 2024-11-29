import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Text } from "@openepi/react-ui/Text"
import { VStack } from "../../styled-system/jsx"

const meta: Meta<typeof Text> = {
	title: "Components/Text",
	component: Text,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			description: "The design variant to be applied",
			options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
		},
		// @ts-ignore
		as: {
			control: "select",
			description: "The HTML element to be rendered",
			options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
		},
		children: {
			control: "text",
			description: "The content to be displayed",
		},
	},
	args: {
		variant: "p",
		children: "I am a text component",
	},
	render: (args) => <Text {...args}>{args.children}</Text>,
}

export default meta

export const Default: StoryObj<typeof Text> = {}

export const AllVariants: StoryFn<typeof Text> = (args) => (
	<VStack gap="8" alignItems="start">
		<Text variant="h1">Heading 1</Text>
		<Text variant="h2">Heading 2</Text>
		<Text variant="h3">Heading 3</Text>
		<Text variant="h4">Heading 4</Text>
		<Text variant="h5">Heading 5</Text>
		<Text variant="h6">Heading 6</Text>
		<Text variant="p">Body</Text>
		<Text variant="span">Caption</Text>
	</VStack>
)

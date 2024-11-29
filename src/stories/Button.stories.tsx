import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Button } from "@openepi/react-ui/Button"
import { HStack, Stack } from "../../styled-system/jsx"
import { button } from "../../styled-system/recipes"
import { Text } from "@openepi/react-ui/Text"

const meta: Meta<typeof Button> = {
	title: "Components/Button/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			description: "Controls the visual style of the button",
			default: "solid",
			options: button.variantMap.variant,
		},
		size: {
			control: "select",
			description: "Controls the size of the button",
			default: "md",
			options: button.variantMap.size,
		},
		radius: {
			control: "select",
			description: "Controls the border radius of the button",
			default: "full",
			options: button.variantMap.radius,
		},
		colorPalette: {
			control: "select",
			description: "Controls the color palette of the button",
			options: ["primary", "secondary", "tertiary", "gray"],
		},
	},
	render: (args) => <Button {...args}>Button</Button>,
}

export default meta

export const Default: StoryObj<typeof Button> = {}

export const Variants: StoryFn<typeof Button> = (args) => {
	const colors = ["primary", "secondary", "tertiary", "gray"]
	return (
		<Stack>
			<HStack justify="space-between">
				<Text flex={1} textAlign="center" variant="p">
					Solid
				</Text>
				<Text flex={1} textAlign="center" variant="p">
					Surface
				</Text>
				<Text flex={1} textAlign="center" variant="p">
					Subtle
				</Text>
				<Text flex={1} textAlign="center" variant="p">
					Ghost
				</Text>
				<Text flex={1} textAlign="center" variant="p">
					Outline
				</Text>
				<Text flex={1} textAlign="center" variant="p">
					Plain
				</Text>
			</HStack>
			{colors.map((color) => (
				<HStack key={color} justify="space-around">
					<Button colorPalette={color} variant="solid" size="md" {...args}>
						{color}
					</Button>
					<Button colorPalette={color} variant="surface" size="md" {...args}>
						{color}
					</Button>
					<Button colorPalette={color} variant="subtle" size="md" {...args}>
						{color}
					</Button>
					<Button colorPalette={color} variant="ghost" size="md" {...args}>
						{color}
					</Button>
					<Button colorPalette={color} variant="outline" size="md" {...args}>
						{color}
					</Button>
					<Button colorPalette={color} variant="plain" size="md" {...args}>
						{color}
					</Button>
				</HStack>
			))}
		</Stack>
	)
}

export const Sizes: StoryFn<typeof Button> = (args) => {
	return (
		<HStack>
			<Button key="sm" size={"sm"} {...args}>
				{"sm"}
			</Button>
			<Button key="md" size={"md"} {...args}>
				{"md"}
			</Button>
			<Button key="lg" size={"lg"} {...args}>
				{"lg"}
			</Button>
		</HStack>
	)
}

export const Loading: StoryFn<typeof Button> = (args) => (
	<Button loading {...args}>
		Loading
	</Button>
)

export const Disabled: StoryFn<typeof Button> = (args) => (
	<Button disabled {...args}>
		Disabled
	</Button>
)

export const IconButton: StoryFn<typeof Button> = (args) => (
	<HStack gap={2}>
		<Button key="add" leftIcon="Add" {...args}>
			Icon Button
		</Button>
		<Button key="alarm" rightIcon="Alarm" {...args}>
			Icon Button
		</Button>
		<Button key="remove" bg={"red.600"} rightIcon="Remove" {...args}>
			Delete
		</Button>
	</HStack>
)

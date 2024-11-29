import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { HStack, Stack } from "../../styled-system/jsx"
import { button } from "../../styled-system/recipes"
import { Text } from "@openepi/react-ui/Text"
import { IconButton } from "@openepi/react-ui/IconButton"

const meta: Meta<typeof IconButton> = {
	title: "Components/Button/IconButton",
	component: IconButton,
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
	render: (args) => <IconButton iconName="Add" {...args} />,
}

export default meta

export const Default: StoryObj<typeof IconButton> = {}

export const Variants: StoryFn<typeof IconButton> = (args) => {
	const colors = ["primary", "secondary", "tertiary", "gray"]
	return (
		<Stack>
			<HStack justify="around">
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
					<IconButton
						iconName="Add"
						colorPalette={color}
						variant="solid"
						size="md"
						{...args}
					/>
					<IconButton
						iconName="Add"
						colorPalette={color}
						variant="surface"
						size="md"
						{...args}
					/>
					<IconButton
						iconName="Add"
						colorPalette={color}
						variant="subtle"
						size="md"
						{...args}
					/>
					<IconButton
						iconName="Add"
						colorPalette={color}
						variant="ghost"
						size="md"
						{...args}
					/>
					<IconButton
						iconName="Add"
						colorPalette={color}
						variant="outline"
						size="md"
						{...args}
					/>
					<IconButton
						iconName="Add"
						colorPalette={color}
						variant="plain"
						size="md"
						{...args}
					/>
				</HStack>
			))}
		</Stack>
	)
}

export const Sizes: StoryFn<typeof IconButton> = (args) => {
	return (
		<HStack>
			<IconButton key="sm" size={"sm"} iconName="CollapseContent" {...args} />
			<IconButton key="md" size={"md"} iconName="ExpandContent" {...args} />
			<IconButton key="lg" size={"lg"} iconName="PanZoom" {...args} />
		</HStack>
	)
}

export const Loading: StoryFn<typeof IconButton> = (args) => (
	<IconButton loading iconName="Add" {...args} />
)

export const Buttons: StoryFn<typeof IconButton> = (args) => (
	<HStack gap={2}>
		<IconButton key="add" iconName="Add" {...args} />
		<IconButton key="alarm" iconName="Alarm" {...args} />
		<IconButton key="remove" bg={"red.600"} iconName="Remove" {...args} />
	</HStack>
)

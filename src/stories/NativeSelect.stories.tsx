import { type Meta, type StoryFn, type StoryObj } from "@storybook/react"
import {
	Field,
	FieldErrorText,
	FieldHelperText,
	FieldLabel,
	Icon,
	InputGroup,
	NativeSelect,
} from "@openepi/react-ui"
import { Mail } from "@openepi/icons"
import { Stack } from "@openepi/styled-system/jsx"

const meta: Meta<typeof NativeSelect> = {
	title: "Form Components/NativeSelect",
	component: NativeSelect,
	tags: ["autodocs"],
	render: (args) => (
		<NativeSelect {...args}>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</NativeSelect>
	),
}

export default meta

export const Default: StoryObj<typeof NativeSelect> = {}

export const Disabled: StoryFn<typeof NativeSelect> = (args: any) => (
	<NativeSelect disabled {...args}>
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
	</NativeSelect>
)

export const Grouped: StoryFn<typeof NativeSelect> = (args: any) => {
	return (
		<Stack display="inline-flex">
			<InputGroup
				leftComponent={
					<Icon>
						<Mail />
					</Icon>
				}
			>
				<NativeSelect {...args} variant="unstyled">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</NativeSelect>
			</InputGroup>
		</Stack>
	)
}
export const WithField: StoryFn<typeof NativeSelect> = (args: any) => (
	<Field>
		<FieldLabel>Label</FieldLabel>
		<NativeSelect {...args}>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</NativeSelect>
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Something went wrong</FieldErrorText>
	</Field>
)

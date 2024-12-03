import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
	Field,
	FieldErrorText,
	FieldHelperText,
	FieldLabel,
} from "@openepi/react-ui/Field"
import { NativeSelect } from "@openepi/react-ui/NativeSelect"
import Mail from "@openepi/icons/icons/Mail"
import Visibility from "@openepi/icons/icons/Visibility"
import { InputGroup } from "@openepi/react-ui/InputGroup"
import { Stack } from "../../styled-system/jsx"
import { IconButton } from "@openepi/react-ui/IconButton"

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

export const Disabled: StoryFn<typeof NativeSelect> = (args) => (
	<NativeSelect disabled {...args}>
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
	</NativeSelect>
)

export const Grouped: StoryFn<typeof NativeSelect> = (args) => {
	return (
		<Stack display="inline-flex">
			<InputGroup leftComponent={<Mail />}>
				<NativeSelect {...args} variant="unstyled">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</NativeSelect>
			</InputGroup>
			<InputGroup
				variant="filled"
				rightComponent={
					<IconButton
						variant="subtle"
						colorPalette="gray"
						size="xs"
						icon={<Visibility />}
					/>
				}
			>
				<NativeSelect disabled {...args} variant="unstyled">
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</NativeSelect>
			</InputGroup>
			<InputGroup
				variant="filled"
				rightComponent={
					<IconButton
						variant="subtle"
						colorPalette="gray"
						size="xs"
						icon={<Visibility />}
					/>
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
export const WithField: StoryFn<typeof NativeSelect> = (args) => (
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

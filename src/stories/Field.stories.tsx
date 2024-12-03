import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
	Field,
	FieldErrorText,
	FieldHelperText,
	FieldLabel,
	FieldRequiredIndicator,
} from "@openepi/react-ui/Field"
import { Input } from "@openepi/react-ui/Input"
import { NativeSelect } from "@openepi/react-ui/NativeSelect"
import { TextArea } from "@openepi/react-ui/TextArea"

const meta: Meta<typeof Field> = {
	title: "Form Components/Field",
	component: Field,
	argTypes: {
		invalid: {
			control: "boolean",
			description: "Indicates if the input is invalid",
			defaultValue: false,
		},
		required: {
			control: "boolean",
			description: "Indicates if the input is required",
			defaultValue: false,
		},
	},
	tags: ["autodocs"],
	render: (args) => (
		<Field {...args}>
			<FieldLabel>
				Label<FieldRequiredIndicator>*</FieldRequiredIndicator>
			</FieldLabel>
			<Input />
			<FieldHelperText>Some additional Info</FieldHelperText>
			<FieldErrorText>Error Info</FieldErrorText>
		</Field>
	),
}

export default meta

export const Default: StoryObj<typeof Field> = {}

export const Invalid: StoryFn<typeof Field> = (args) => (
	<Field invalid {...args}>
		<FieldLabel>Input</FieldLabel>
		<Input />
		<FieldErrorText>Error Info</FieldErrorText>
	</Field>
)

export const HelperText: StoryFn<typeof Field> = (args) => (
	<Field {...args}>
		<FieldLabel>Input</FieldLabel>
		<Input />
		<FieldHelperText>Some additional Info</FieldHelperText>
	</Field>
)

export const Disabled: StoryFn<typeof Field> = (args) => (
	<Field disabled {...args}>
		<FieldLabel>Input</FieldLabel>
		<Input />
		<FieldHelperText>Some additional Info</FieldHelperText>
	</Field>
)

export const Textarea: StoryFn<typeof Field> = (args) => (
	<Field {...args}>
		<FieldLabel>Label</FieldLabel>
		<TextArea />
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Error Info</FieldErrorText>
	</Field>
)

export const Select: StoryFn<typeof Field> = (args) => (
	<Field {...args}>
		<FieldLabel>Label</FieldLabel>
		<NativeSelect>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</NativeSelect>
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Error Info</FieldErrorText>
	</Field>
)

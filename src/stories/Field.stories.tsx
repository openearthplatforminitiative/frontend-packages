import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
	Field,
	FieldErrorText,
	FieldHelperText,
	FieldInput,
	FieldLabel,
	FieldRequiredIndicator,
	FieldSelect,
	FieldTextarea,
} from "@openepi/react-ui/Field"

const meta: Meta<typeof Field> = {
	title: "Components/Field",
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
			<FieldInput />
			<FieldHelperText>Some additional Info</FieldHelperText>
			<FieldErrorText>Error Info</FieldErrorText>
		</Field>
	),
}

export default meta

export const Default: StoryObj<typeof Field> = {}

export const InvalidInput: StoryFn<typeof Field> = (args: any) => (
	<Field invalid>
		<FieldLabel>Input</FieldLabel>
		<FieldInput />
		<FieldLabel>TextArea</FieldLabel>
		<FieldTextarea />
		<FieldLabel>Select</FieldLabel>
		<FieldSelect>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</FieldSelect>
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Error Info</FieldErrorText>
	</Field>
)

export const Textarea: StoryFn<typeof Field> = (args: any) => (
	<Field>
		<FieldLabel>Label</FieldLabel>
		<FieldTextarea />
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Error Info</FieldErrorText>
	</Field>
)

export const Select: StoryFn<typeof Field> = (args: any) => (
	<Field>
		<FieldLabel>Label</FieldLabel>
		<FieldSelect>
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</FieldSelect>
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Error Info</FieldErrorText>
	</Field>
)

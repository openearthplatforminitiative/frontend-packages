import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
	Field,
	FieldErrorText,
	FieldHelperText,
	FieldLabel,
} from "@openepi/react-ui/Field"
import { TextArea } from "@openepi/react-ui/TextArea"

const meta: Meta<typeof TextArea> = {
	title: "Form Components/TextArea",
	component: TextArea,
	tags: ["autodocs"],
	render: (args) => <TextArea placeholder="Type here..." {...args} />,
}

export default meta

export const Default: StoryObj<typeof TextArea> = {}

export const WithField: StoryFn<typeof TextArea> = (args) => (
	<Field>
		<FieldLabel>Label</FieldLabel>
		<TextArea placeholder="Type here..." {...args} />
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Something went wrong</FieldErrorText>
	</Field>
)

import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
	Field,
	FieldErrorText,
	FieldHelperText,
	FieldLabel,
} from "@openepi/react-ui/Field"
import { Input } from "@openepi/react-ui/Input"
import { InputGroup } from "packages/react-ui/dist/components/InputGroup"
import Visibility from "@openepi/icons/icons/Visibility"
import VisibilityOff from "@openepi/icons/icons/VisibilityOff"
import Mail from "@openepi/icons/icons/Mail"
import { useState } from "react"
import { IconButton } from "@openepi/react-ui/IconButton"
import { Stack } from "../../styled-system/jsx"

const meta: Meta<typeof Input> = {
	title: "Form Components/Input",
	component: Input,
	tags: ["autodocs"],
	render: (args) => <Input placeholder="Type here..." {...args} />,
}

export default meta

export const Default: StoryObj<typeof Input> = {}

export const Disabled: StoryFn<typeof Input> = (args) => (
	<Input disabled placeholder="Type here..." {...args} />
)

export const Grouped: StoryFn<typeof Input> = (args) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<Stack display="inline-flex">
			<InputGroup leftComponent={<Mail />}>
				<Input variant="unstyled" placeholder="someone@example.com" {...args} />
			</InputGroup>
			<InputGroup
				rightComponent={
					<IconButton
						variant="subtle"
						colorPalette="gray"
						size="xs"
						icon={showPassword ? <Visibility /> : <VisibilityOff />}
						onClick={() => setShowPassword(!showPassword)}
					/>
				}
			>
				<Input
					variant="unstyled"
					type={showPassword ? "text" : "password"}
					placeholder="Type here..."
					{...args}
				/>
			</InputGroup>
		</Stack>
	)
}

export const WithField: StoryFn<typeof Input> = (args) => (
	<Field>
		<FieldLabel>Label</FieldLabel>
		<Input placeholder="Type here..." {...args} />
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Something went wrong</FieldErrorText>
	</Field>
)

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
import { NativeSelect } from "packages/react-ui/dist/components/NativeSelect"

const meta: Meta<typeof InputGroup> = {
	title: "Form Components/InputGroup",
	component: InputGroup,
	tags: ["autodocs"],
	render: (args) => (
		<InputGroup {...args} leftComponent={<Mail />}>
			<Input variant="unstyled" placeholder="someone@example.com" />
		</InputGroup>
	),
}

export default meta

export const Default: StoryObj<typeof InputGroup> = {}

export const Disabled: StoryFn<typeof InputGroup> = (args) => (
	<InputGroup leftComponent={<Mail />} {...args}>
		<Input variant="unstyled" disabled placeholder="someone@example.com" />
	</InputGroup>
)

export const Grouped: StoryFn<typeof InputGroup> = (args) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<Stack display="inline-flex">
			<InputGroup leftComponent={<Mail />} {...args}>
				<Input variant="unstyled" placeholder="someone@example.com" />
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
				/>
			</InputGroup>
			<InputGroup
				rightComponent={
					<NativeSelect size="sm">
						<option>USD</option>
						<option>EUR</option>
						<option>GBP</option>
					</NativeSelect>
				}
			>
				<Input
					variant="unstyled"
					type={showPassword ? "text" : "password"}
					placeholder="Type here..."
				/>
			</InputGroup>
		</Stack>
	)
}

export const WithField: StoryFn<typeof InputGroup> = (args) => (
	<Field invalid>
		<FieldLabel>Label</FieldLabel>
		<InputGroup {...args} leftComponent={<Mail />}>
			<Input variant="unstyled" placeholder="someone@example.com" />
		</InputGroup>
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Something went wrong</FieldErrorText>
	</Field>
)

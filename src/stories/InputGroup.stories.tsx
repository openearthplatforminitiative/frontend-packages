import { type Meta, type StoryFn, type StoryObj } from "@storybook/react"
import {
	Field,
	FieldErrorText,
	FieldHelperText,
	FieldLabel,
	Icon,
} from "@openepi/react-ui"
import { Input } from "@openepi/react-ui"
import { InputGroup } from "@openepi/react-ui"
import { Visibility } from "@openepi/icons"
import { VisibilityOff } from "@openepi/icons"
import { Mail } from "@openepi/icons"
import { useState } from "react"
import { IconButton } from "@openepi/react-ui"
import { Stack } from "@openepi/styled-system/jsx"
import { NativeSelect } from "@openepi/react-ui"

const meta: Meta<typeof InputGroup> = {
	title: "Form Components/InputGroup",
	component: InputGroup,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["outline", "filled"],
			default: "outline",
		},
	},
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
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? (
							<Icon>
								<Visibility />
							</Icon>
						) : (
							<Icon>
								<VisibilityOff />
							</Icon>
						)}
					</IconButton>
				}
				{...args}
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
				{...args}
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

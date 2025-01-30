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

const meta: Meta<typeof Input> = {
	title: "Form Components/Input",
	component: Input,
	tags: ["autodocs"],
	render: (args) => <Input placeholder="Type here..." {...args} />,
}

export default meta

export const Default: StoryObj<typeof Input> = {}

export const Disabled: StoryFn<typeof Input> = (args: any) => (
	<Input disabled placeholder="Type here..." {...args} />
)

export const Grouped: StoryFn<typeof Input> = (args: any) => {
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

export const WithField: StoryFn<typeof Input> = (args: any) => (
	<Field>
		<FieldLabel>Label</FieldLabel>
		<Input placeholder="Type here..." {...args} />
		<FieldHelperText>Some additional Info</FieldHelperText>
		<FieldErrorText>Something went wrong</FieldErrorText>
	</Field>
)

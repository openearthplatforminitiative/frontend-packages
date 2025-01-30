import { type Meta, type StoryFn, type StoryObj } from "@storybook/react"
import {
	Checkbox,
	CheckboxControl,
	CheckboxGroup,
	CheckboxIndicator,
	CheckboxLabel,
	CheckboxHiddenInput,
} from "@openepi/react-ui"
import { useState } from "react"
import { HStack, Stack } from "packages/styled-system/dist/jsx"

const items = [
	{ label: "React", value: "react" },
	{ label: "Solid", value: "solid" },
	{ label: "Vue", value: "vue" },
]

const meta: Meta<typeof Checkbox> = {
	title: "Form Components/Checkbox",
	component: Checkbox,
	tags: ["autodocs"],
	render: (args) => (
		<CheckboxGroup defaultValue={["react"]}>
			{items.map((item) => (
				<Checkbox value={item.value} key={item.value} {...args}>
					<CheckboxLabel>{item.label}</CheckboxLabel>
				</Checkbox>
			))}
		</CheckboxGroup>
	),
}

export default meta

export const Default: StoryObj<typeof Checkbox> = {}

export const Sizes: StoryFn<typeof Checkbox> = () => {
	const sizes = ["sm", "md", "lg"]

	return (
		<HStack>
			{sizes.map((item) => (
				<Checkbox value={item} key={item} size={item}>
					<CheckboxLabel>{item}</CheckboxLabel>
				</Checkbox>
			))}
		</HStack>
	)
}

export const Variants: StoryFn<typeof Checkbox> = () => {
	const variants = ["outlined", "filled", "solid"]

	return (
		<HStack>
			{variants.map((item) => (
				<Checkbox value={item} key={item} variant={item}>
					<CheckboxLabel>{item}</CheckboxLabel>
				</Checkbox>
			))}
		</HStack>
	)
}

export const States: StoryFn<typeof Checkbox> = (args) => {
	return (
		<HStack>
			<Checkbox value="invalid" invalid {...args}>
				<CheckboxLabel>invalid</CheckboxLabel>
			</Checkbox>
			<Checkbox value="disabled" disabled checked {...args}>
				<CheckboxLabel>disabled</CheckboxLabel>
			</Checkbox>
			<Checkbox value="disabled" disabled {...args}>
				<CheckboxLabel>disabled</CheckboxLabel>
			</Checkbox>
			<Checkbox readOnly value="readOnly" {...args}>
				<CheckboxLabel>readOnly</CheckboxLabel>
			</Checkbox>
		</HStack>
	)
}

export const Indeterminate: StoryFn<typeof Checkbox> = () => {
	const initialValues = [
		{ label: "Monday", checked: false, value: "monday" },
		{ label: "Tuesday", checked: false, value: "tuesday" },
		{ label: "Wednesday", checked: false, value: "wednesday" },
		{ label: "Thursday", checked: false, value: "thursday" },
		{ label: "Friday", checked: false, value: "friday" },
		{ label: "Saturday", checked: false, value: "saturday" },
		{ label: "Sunday", checked: false, value: "sunday" },
	]
	const [values, setValues] = useState(initialValues)

	const allChecked = values.every((value) => value.checked)
	const indeterminate = values.some((value) => value.checked) && !allChecked

	const items = values.map((item, index) => (
		<Checkbox
			ml={2}
			key={item.value}
			checked={item.checked}
			onCheckedChange={(e) => {
				setValues((current) => {
					const newValues = [...current]
					newValues[index] = { ...newValues[index], checked: !!e.checked }
					return newValues
				})
			}}
		>
			<CheckboxLabel>{item.label}</CheckboxLabel>
		</Checkbox>
	))

	return (
		<Stack>
			<Checkbox
				checked={indeterminate ? "indeterminate" : allChecked}
				onCheckedChange={(e) => {
					setValues((current) =>
						current.map((value) => ({ ...value, checked: !!e.checked }))
					)
				}}
			>
				<CheckboxLabel>Weekdays</CheckboxLabel>
			</Checkbox>
			{items}
		</Stack>
	)
}

export const Detached: StoryFn<typeof Checkbox> = () => {
	return (
		<CheckboxGroup>
			<Checkbox value="detached" detachControl detachHiddenInput>
				<CheckboxControl detachIndicator>
					<CheckboxIndicator />
				</CheckboxControl>
				<CheckboxHiddenInput />
				<CheckboxLabel>Detached</CheckboxLabel>
			</Checkbox>
		</CheckboxGroup>
	)
}

import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
	Combobox,
	ComboboxClearTrigger,
	ComboboxContent,
	ComboboxControl,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemGroup,
	ComboboxItemGroupLabel,
	ComboboxItemIndicator,
	ComboboxItemText,
	ComboboxPositioner,
	ComboboxTrigger,
} from "@openepi/react-ui/Combobox"
import { useMemo, useState } from "react"
import { Portal } from "@openepi/react-ui/Portal"
import {
	ComboboxContext,
	ComboboxInputValueChangeDetails,
	createListCollection,
} from "@ark-ui/react"
import { Field, FieldLabel } from "@openepi/react-ui/Field"
import { Icon } from "@openepi/react-ui/Icon"
import {
	TagsInput,
	TagsInputContext,
	TagsInputControl,
	TagsInputInput,
} from "@openepi/react-ui/TagsInput"
import {
	Tag,
	TagDeleteTrigger,
	TagPreview,
	TagText,
} from "@openepi/react-ui/Tag"
import Close from "packages/icons/dist/icons/Close"
import KeyboardArrowDown from "packages/icons/dist/icons/KeyboardArrowDown"
import { IconButton } from "@openepi/react-ui/IconButton"
import { groupBy } from "lodash"
import { InputGroup } from "@openepi/react-ui/InputGroup"
import { HStack } from "../../styled-system/jsx"

const initialItems = ["React", "Solid", "Vue"]

const meta: Meta<typeof Combobox> = {
	title: "Form Components/Combobox",
	component: Combobox,
	tags: ["autodocs"],
	render: (args) => {
		const [items, setItems] = useState(initialItems)

		const collection = useMemo(() => createListCollection({ items }), [items])

		const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
			setItems(
				initialItems.filter((item) =>
					item.toLowerCase().includes(details.inputValue.toLowerCase())
				)
			)
		}

		return (
			<Field>
				<FieldLabel>Framework</FieldLabel>
				<Combobox
					{...args}
					openOnClick
					collection={collection}
					onInputValueChange={handleInputChange}
				>
					<ComboboxControl>
						<InputGroup
							rightComponent={
								<HStack gap={1}>
									<ComboboxClearTrigger asChild>
										<IconButton
											variant="outline"
											size="xs"
											colorPalette="gray"
											icon={<Close />}
										/>
									</ComboboxClearTrigger>
									<ComboboxTrigger asChild>
										<IconButton
											variant="subtle"
											size="xs"
											colorPalette="gray"
											icon={<KeyboardArrowDown />}
										/>
									</ComboboxTrigger>
								</HStack>
							}
						>
							<ComboboxInput />
						</InputGroup>
					</ComboboxControl>
					<Portal>
						<ComboboxPositioner>
							<ComboboxContent>
								<ComboboxItemGroup>
									<ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
									{collection.items.map((item: string) => (
										<ComboboxItem key={item} item={item}>
											<ComboboxItemText>{item}</ComboboxItemText>
											<ComboboxItemIndicator>
												<Icon name="Check" />
											</ComboboxItemIndicator>
										</ComboboxItem>
									))}
								</ComboboxItemGroup>
							</ComboboxContent>
						</ComboboxPositioner>
					</Portal>
				</Combobox>
			</Field>
		)
	},
}

export default meta

export const Default: StoryObj<typeof Combobox> = {}

const country_list: string[] = [
	"Algeria",
	"Angola",
	"Brazil",
	"Cuba",
	"Haiti",
	"Liechtenstein",
	"Mozambique",
	"Nepal",
	"Rwanda",
	"Tanzania",
	"Uganda",
	"Uruguay",
	"Zimbabwe",
]

export const MultiSelect: StoryFn<typeof Combobox> = (args) => {
	const [items, setItems] = useState(country_list)

	const collection = useMemo(() => createListCollection({ items }), [items])
	const groupedCountries = useMemo(() => {
		return groupBy(items, (item) => item[0].toUpperCase())
	}, [items])
	const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
		setItems(
			country_list.filter((item) =>
				item.toLowerCase().includes(details.inputValue.toLowerCase())
			)
		)
	}

	return (
		<Field>
			<FieldLabel>Countries</FieldLabel>
			<Combobox
				invalid
				{...args}
				openOnClick
				multiple
				collection={collection}
				onInputValueChange={handleInputChange}
			>
				<ComboboxControl>
					<ComboboxContext>
						{(combobox) => (
							<InputGroup
								leftComponent={
									combobox.value.length > 0 &&
									`${combobox.value.length} Selected`
								}
								rightComponent={
									<HStack gap={1}>
										<ComboboxClearTrigger asChild>
											<IconButton
												variant="outline"
												size="xs"
												colorPalette="gray"
												icon={<Close />}
											/>
										</ComboboxClearTrigger>
										<ComboboxTrigger asChild>
											<IconButton
												variant="subtle"
												size="xs"
												colorPalette="gray"
												icon={<KeyboardArrowDown />}
											/>
										</ComboboxTrigger>
									</HStack>
								}
							>
								<ComboboxInput />
							</InputGroup>
						)}
					</ComboboxContext>
				</ComboboxControl>
				<Portal>
					<ComboboxPositioner>
						<ComboboxContent>
							{Object.entries(groupedCountries).map(([group, items], index) => (
								<ComboboxItemGroup key={index}>
									<ComboboxItemGroupLabel>{group}</ComboboxItemGroupLabel>
									{items.map((item: string) => (
										<ComboboxItem key={item} item={item}>
											<ComboboxItemText>{item}</ComboboxItemText>
											<ComboboxItemIndicator>
												<Icon name="Check" />
											</ComboboxItemIndicator>
										</ComboboxItem>
									))}
								</ComboboxItemGroup>
							))}
						</ComboboxContent>
					</ComboboxPositioner>
				</Portal>
			</Combobox>
		</Field>
	)
}

export const MultiSelectWithTags: StoryFn<typeof Combobox> = (args) => {
	const [items, setItems] = useState(country_list)

	const collection = useMemo(() => createListCollection({ items }), [items])
	const groupedCountries = useMemo(() => {
		return groupBy(items, (item) => item[0].toUpperCase())
	}, [items])

	const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
		setItems(
			country_list.filter((item) =>
				item.toLowerCase().includes(details.inputValue.toLowerCase())
			)
		)
	}

	return (
		<Field>
			<FieldLabel>Select Countries</FieldLabel>
			<Combobox
				{...args}
				multiple
				openOnClick
				allowCustomValue
				collection={collection}
			>
				<ComboboxContext>
					{(combobox) => (
						<ComboboxControl>
							<TagsInput
								max={2}
								allowOverflow
								value={combobox.value}
								onInputValueChange={handleInputChange}
								onValueChange={(value) => combobox.setValue(value.value)}
								validate={(value) => country_list.includes(value.inputValue)}
								onFocus={() => combobox.setOpen(true)}
								editable={false}
							>
								<TagsInputContext>
									{(tagsInput) => (
										<InputGroup
											rightComponent={
												<HStack gap={1}>
													<ComboboxClearTrigger asChild>
														<IconButton
															variant="outline"
															size="xs"
															colorPalette="gray"
															icon={<Close />}
														/>
													</ComboboxClearTrigger>
													<ComboboxTrigger asChild>
														<IconButton
															variant="subtle"
															size="xs"
															colorPalette="gray"
															icon={<KeyboardArrowDown />}
														/>
													</ComboboxTrigger>
												</HStack>
											}
										>
											<TagsInputControl>
												{tagsInput.value.map((value, index) => (
													<Tag key={index} index={index} value={value}>
														<TagPreview>
															<TagText>{value}</TagText>
															<TagDeleteTrigger>
																<Close />
															</TagDeleteTrigger>
														</TagPreview>
													</Tag>
												))}
												<TagsInputInput asChild>
													<ComboboxInput />
												</TagsInputInput>
											</TagsInputControl>
										</InputGroup>
									)}
								</TagsInputContext>
							</TagsInput>
						</ComboboxControl>
					)}
				</ComboboxContext>
				<Portal>
					<ComboboxPositioner>
						<ComboboxContent>
							{Object.entries(groupedCountries).map(([group, items], index) => (
								<ComboboxItemGroup key={index}>
									<ComboboxItemGroupLabel>{group}</ComboboxItemGroupLabel>
									{items.map((item: string) => (
										<ComboboxItem key={item} item={item}>
											<ComboboxItemText>{item}</ComboboxItemText>
											<ComboboxItemIndicator>
												<Icon name="Check" />
											</ComboboxItemIndicator>
										</ComboboxItem>
									))}
								</ComboboxItemGroup>
							))}
						</ComboboxContent>
					</ComboboxPositioner>
				</Portal>
			</Combobox>
		</Field>
	)
}

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
} from "../src/components/Combobox"
import { useMemo, useState } from "react"
import { Portal } from "../src/components/Portal"
import {
	ComboboxContext,
	ComboboxInputValueChangeDetails,
	createListCollection,
} from "@ark-ui/react"
import { Field, FieldInput, FieldLabel } from "../src/components/Field"
import { Icon } from "../src/components/Icon"
import {
	TagsInput,
	TagsInputClearTrigger,
	TagsInputContext,
	TagsInputControl,
	TagsInputInput,
	TagsInputHiddenInput,
} from "../src/components/TagsInput"
import {
	Tag,
	TagDeleteTrigger,
	TagInput,
	TagPreview,
	TagText,
} from "../src/components/Tag"
import Close from "packages/icons/dist/icons/Close"
import KeyboardArrowDown from "packages/icons/dist/icons/KeyboardArrowDown"
import { IconButton } from "../src/components/IconButton"
import { groupBy } from "lodash"
import { InputGroup } from "../src/components/InputGroup"
import { HStack } from "../styled-system/jsx"

const initialItems = ["React", "Solid", "Vue"]

const meta: Meta<typeof Combobox> = {
	title: "Components/Combobox",
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
					openOnClick
					invalid
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
											size="2xs"
											colorPalette="gray"
											icon={<Close />}
										/>
									</ComboboxClearTrigger>
									<ComboboxTrigger asChild>
										<IconButton
											size="2xs"
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
				openOnClick
				multiple
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
										size="2xs"
										colorPalette="gray"
										icon={<Close />}
									/>
								</ComboboxClearTrigger>
								<ComboboxTrigger asChild>
									<IconButton
										size="2xs"
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
				multiple
				openOnClick
				collection={collection}
				onInputValueChange={handleInputChange}
			>
				<ComboboxContext>
					{(tagsInput) => (
						<ComboboxControl>
							<InputGroup
								rightComponent={
									<HStack gap={1}>
										<ComboboxClearTrigger asChild>
											<IconButton
												variant="outline"
												size="2xs"
												colorPalette="gray"
												icon={<Close />}
											/>
										</ComboboxClearTrigger>
										<ComboboxTrigger asChild>
											<IconButton
												size="2xs"
												colorPalette="gray"
												icon={<KeyboardArrowDown />}
											/>
										</ComboboxTrigger>
									</HStack>
								}
							>
								<TagsInput
									max={2}
									allowOverflow
									onClick={() => tagsInput.setOpen(true)}
								>
									<TagsInputControl>
										{tagsInput.value.map((value, index) => (
											<Tag key={index} index={index} value={value}>
												<TagPreview>
													<TagText>{value}</TagText>
													<TagDeleteTrigger
														onClick={() => tagsInput.clearValue(value)}
													>
														<Close />
													</TagDeleteTrigger>
												</TagPreview>
												<TagInput />
											</Tag>
										))}
										<ComboboxInput asChild>
											<TagsInputInput />
										</ComboboxInput>
									</TagsInputControl>
								</TagsInput>
							</InputGroup>
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

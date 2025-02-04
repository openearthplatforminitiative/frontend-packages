import { type Meta, type StoryFn, type StoryObj } from "@storybook/react"
import {
	Table,
	TableCaption,
	TableHead,
	TableRow,
	TableColumnHeader,
	TableBody,
	TableCell,
	TableFooter,
	Checkbox,
	Menu,
	Icon,
	IconButton,
	MenuContent,
	MenuIndicator,
	MenuItem,
	MenuSeparator,
	MenuTrigger,
} from "@openepi/react-ui"
import { Box } from "@openepi/styled-system/jsx"
import { useState } from "react"
import {
	MoreHoriz,
	ArrowForward,
	Edit,
	FileCopy,
	Close,
} from "packages/icons/src"

const continents = [
	{
		id: 1,
		name: "Africa",
		area: 30.37,
		population: 1.216,
		countries: 54,
		largestCountry: "Algeria",
		smallestCountry: "Seychelles",
	},
	{
		id: 2,
		name: "Antarctica",
		area: 14.0,
		population: 0.001,
		countries: 0,
		largestCountry: "N/A",
		smallestCountry: "N/A",
	},
	{
		id: 3,
		name: "Asia",
		area: 44.58,
		population: 4.561,
		countries: 49,
		largestCountry: "Russia",
		smallestCountry: "Maldives",
	},
	{
		id: 4,
		name: "Europe",
		area: 10.18,
		population: 0.746,
		countries: 44,
		largestCountry: "Russia",
		smallestCountry: "Vatican City",
	},
	{
		id: 5,
		name: "North America",
		area: 24.71,
		population: 0.579,
		countries: 23,
		largestCountry: "Canada",
		smallestCountry: "Saint Kitts and Nevis",
	},
	{
		id: 6,
		name: "Australia",
		area: 8.56,
		population: 0.025,
		countries: 14,
		largestCountry: "Australia",
		smallestCountry: "Nauru",
	},
	{
		id: 7,
		name: "South America",
		area: 17.84,
		population: 0.422,
		countries: 12,
		largestCountry: "Brazil",
		smallestCountry: "Suriname",
	},
]

const headers = [
	"Name",
	"Area (million km²)",
	"Population (billion)",
	"Countries",
	"Largest Country",
	"Smallest Country",
]

const meta: Meta<typeof Table> = {
	title: "Components/Table",
	component: Table,
	tags: ["autodocs"],
	argTypes: {
		stickyHeader: {
			control: {
				type: "boolean",
			},
		},
		stickyFirstColumn: {
			control: {
				type: "boolean",
			},
		},
		interactive: {
			control: {
				type: "boolean",
			},
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
	render: (args) => (
		<Table {...args}>
			<TableHead>
				<TableRow>
					{headers.map((header) => (
						<TableColumnHeader key={header}>{header}</TableColumnHeader>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{continents.map((continent) => (
					<TableRow key={continent.id}>
						<TableCell>{continent.name}</TableCell>
						<TableCell>{continent.area}</TableCell>
						<TableCell textAlign="end">{continent.population}</TableCell>
						<TableCell textAlign="end">{continent.countries}</TableCell>
						<TableCell>{continent.largestCountry}</TableCell>
						<TableCell>{continent.smallestCountry}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	),
}

export default meta

export const Default: StoryObj<typeof Table> = {}

export const Interactive: StoryFn<typeof Table> = (args: any) => (
	<Table interactive>
		<TableHead>
			<TableRow>
				{headers.map((header) => (
					<TableColumnHeader key={header}>{header}</TableColumnHeader>
				))}
			</TableRow>
		</TableHead>
		<TableBody>
			{continents.map((continent) => (
				<TableRow key={continent.id}>
					<TableCell>{continent.name}</TableCell>
					<TableCell>{continent.area}</TableCell>
					<TableCell textAlign="end">{continent.population}</TableCell>
					<TableCell textAlign="end">{continent.countries}</TableCell>
					<TableCell>{continent.largestCountry}</TableCell>
					<TableCell>{continent.smallestCountry}</TableCell>
				</TableRow>
			))}
		</TableBody>
	</Table>
)

export const StickyHeader: StoryFn<typeof Table> = (args: any) => (
	<Box h="200px" overflowY="scroll">
		<Table stickyHeader>
			<TableHead>
				<TableRow>
					{headers.map((header) => (
						<TableColumnHeader key={header}>{header}</TableColumnHeader>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{continents.map((continent) => (
					<TableRow key={continent.id}>
						<TableCell>{continent.name}</TableCell>
						<TableCell>{continent.area}</TableCell>
						<TableCell textAlign="end">{continent.population}</TableCell>
						<TableCell textAlign="end">{continent.countries}</TableCell>
						<TableCell>{continent.largestCountry}</TableCell>
						<TableCell>{continent.smallestCountry}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</Box>
)
export const stickyFirstColumn: StoryFn<typeof Table> = (args: any) => (
	<Box w="400px" overflowX="scroll">
		<Table stickyFirstColumn>
			<TableHead>
				<TableRow>
					{headers.map((header) => (
						<TableColumnHeader key={header}>{header}</TableColumnHeader>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{continents.map((continent) => (
					<TableRow key={continent.id}>
						<TableCell>{continent.name}</TableCell>
						<TableCell>{continent.area}</TableCell>
						<TableCell textAlign="end">{continent.population}</TableCell>
						<TableCell textAlign="end">{continent.countries}</TableCell>
						<TableCell>{continent.largestCountry}</TableCell>
						<TableCell>{continent.smallestCountry}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</Box>
)
export const stickyHeaderAndColumn: StoryFn<typeof Table> = (args: any) => (
	<Box w="400px" h="200px" overflow="scroll">
		<Table stickyFirstColumn stickyHeader>
			<TableHead>
				<TableRow>
					{headers.map((header) => (
						<TableColumnHeader key={header}>{header}</TableColumnHeader>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{continents.map((continent) => (
					<TableRow key={continent.id}>
						<TableCell>{continent.name}</TableCell>
						<TableCell>{continent.area}</TableCell>
						<TableCell textAlign="end">{continent.population}</TableCell>
						<TableCell textAlign="end">{continent.countries}</TableCell>
						<TableCell>{continent.largestCountry}</TableCell>
						<TableCell>{continent.smallestCountry}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</Box>
)

export const WithFooter: StoryFn<typeof Table> = (args: any) => (
	<Table>
		<TableHead>
			<TableRow>
				{headers.map((header) => (
					<TableColumnHeader key={header}>{header}</TableColumnHeader>
				))}
			</TableRow>
		</TableHead>
		<TableBody>
			{continents.map((continent) => (
				<TableRow key={continent.id}>
					<TableCell>{continent.name}</TableCell>
					<TableCell>{continent.area}</TableCell>
					<TableCell textAlign="end">{continent.population}</TableCell>
					<TableCell textAlign="end">{continent.countries}</TableCell>
					<TableCell>{continent.largestCountry}</TableCell>
					<TableCell>{continent.smallestCountry}</TableCell>
				</TableRow>
			))}
		</TableBody>
		<TableFooter>
			<TableRow>
				<TableCell colSpan={2}>Total</TableCell>
				<TableCell textAlign="end">18.0</TableCell>
				<TableCell textAlign="end">6.0</TableCell>
				<TableCell textAlign="end"></TableCell>
				<TableCell></TableCell>
				<TableCell></TableCell>
			</TableRow>
		</TableFooter>
	</Table>
)

export const WithCaption: StoryFn<typeof Table> = (args: any) => (
	<Table>
		<TableCaption>Continents</TableCaption>
		<TableHead>
			<TableRow>
				{headers.map((header) => (
					<TableColumnHeader key={header}>{header}</TableColumnHeader>
				))}
			</TableRow>
		</TableHead>
		<TableBody>
			{continents.map((continent) => (
				<TableRow key={continent.id}>
					<TableCell>{continent.name}</TableCell>
					<TableCell>{continent.area}</TableCell>
					<TableCell textAlign="end">{continent.population}</TableCell>
					<TableCell textAlign="end">{continent.countries}</TableCell>
					<TableCell>{continent.largestCountry}</TableCell>
					<TableCell>{continent.smallestCountry}</TableCell>
				</TableRow>
			))}
		</TableBody>
	</Table>
)

export const WithCheckbox: StoryFn<typeof Table> = (args: any) => {
	const [selection, setSelection] = useState<number[]>([])

	const hasSelection = selection.length > 0
	const indeterminate = hasSelection && selection.length < continents.length

	return (
		<Table stickyFirstColumn stickyHeader interactive>
			<TableHead>
				<TableRow>
					<TableColumnHeader>
						<Checkbox
							checked={indeterminate ? "indeterminate" : selection.length > 0}
							onCheckedChange={(changes) => {
								setSelection(
									changes.checked
										? continents.map((continent) => continent.id)
										: []
								)
							}}
						/>
					</TableColumnHeader>
					{headers.map((header) => (
						<TableColumnHeader key={header}>{header}</TableColumnHeader>
					))}
					<TableColumnHeader textAlign="end">Actions</TableColumnHeader>
				</TableRow>
			</TableHead>
			<TableBody>
				{continents.map((continent) => (
					<TableRow
						key={continent.id}
						data-selected={selection.includes(continent.id) ? "" : undefined}
					>
						<TableCell>
							<Checkbox
								checked={selection.includes(continent.id)}
								onCheckedChange={(changes) => {
									setSelection((prev) =>
										changes.checked
											? [...prev, continent.id]
											: selection.filter((id) => id !== continent.id)
									)
								}}
							/>
						</TableCell>
						<TableCell>{continent.name}</TableCell>
						<TableCell>{continent.area}</TableCell>
						<TableCell textAlign="end">{continent.population}</TableCell>
						<TableCell textAlign="end">{continent.countries}</TableCell>
						<TableCell>{continent.largestCountry}</TableCell>
						<TableCell>{continent.smallestCountry}</TableCell>
						<TableCell textAlign="end">
							<Menu
								positioning={{
									placement: "bottom-end",
								}}
							>
								<MenuTrigger asChild>
									<IconButton size="sm" variant="ghost" colorPalette="gray">
										<MenuIndicator asChild>
											<Icon fontSize="4xl">
												<MoreHoriz />
											</Icon>
										</MenuIndicator>
									</IconButton>
								</MenuTrigger>
								<MenuContent portalled>
									<MenuItem value="open">
										<ArrowForward />
										Open
									</MenuItem>
									<MenuItem value="edit">
										<Edit />
										Edit
									</MenuItem>
									<MenuItem value="duplicate">
										<FileCopy />
										Duplicate
									</MenuItem>
									<MenuSeparator />
									<MenuItem
										bg="red.200"
										color="red.800"
										fill="red.800"
										_hover={{
											bg: "red.100",
										}}
										_highlighted={{
											bg: "red.100",
										}}
										value="delete"
									>
										<Close />
										Delete
									</MenuItem>
								</MenuContent>
							</Menu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

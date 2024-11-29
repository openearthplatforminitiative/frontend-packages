import { Meta, StoryFn, StoryObj } from "@storybook/react"
import {
	AccordionItem,
	AccordionItemContent,
	AccordionItemIndicator,
	AccordionItemTrigger,
	Accordion,
} from "@openepi/react-ui/Accordion"
import { accordion } from "../../styled-system/recipes"
import { Icon } from "packages/icons"

const meta: Meta<typeof Accordion> = {
	title: "Components/Accordion",
	component: Accordion,
	argTypes: {
		variant: {
			control: "select",
			options: accordion.variantMap.variant,
		},
		colorPalette: {
			control: "select",
			defaultValue: "gray",
			options: ["gray", "primary", "secondary", "tertiary"],
		},
	},
	tags: ["autodocs"],
	render: (args) => (
		<Accordion {...args}>
			{["React", "Solid", "Vue"].map((item) => (
				<AccordionItem key={item} value={item}>
					<AccordionItemTrigger>
						What is {item}?
						<AccordionItemIndicator>
							<Icon name="KeyboardArrowDown" />
						</AccordionItemIndicator>
					</AccordionItemTrigger>
					<AccordionItemContent>
						{item} is a JavaScript library for building user interfaces.
					</AccordionItemContent>
				</AccordionItem>
			))}
		</Accordion>
	),
}

export default meta

export const Default: StoryObj<typeof Accordion> = {}

const collapsible: StoryFn<typeof Accordion> = () => (
	<Accordion defaultValue={["React"]} collapsible>
		{["React", "Solid", "Vue"].map((item) => (
			<AccordionItem key={item} value={item}>
				<AccordionItemTrigger>
					What is {item}?
					<AccordionItemIndicator>
						<Icon name="KeyboardArrowDown" />
					</AccordionItemIndicator>
				</AccordionItemTrigger>
				<AccordionItemContent>
					{item} is a JavaScript library for building user interfaces.
				</AccordionItemContent>
			</AccordionItem>
		))}
	</Accordion>
)

export const Collapsible: StoryObj<typeof Accordion> = {
	render: collapsible,
}

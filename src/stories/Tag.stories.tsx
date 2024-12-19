import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Tag, TagPreview, TagText } from "@openepi/react-ui/Tag"

export default {
	title: "Components/Tag",
	tags: ["autodocs"],
	component: Tag,
	render: (args) => (
		<Tag index={""} value={""} {...args}>
			<TagPreview>
				<TagText>Tag</TagText>
			</TagPreview>
		</Tag>
	),
} as Meta

export const Default: StoryObj<typeof Tag> = {}

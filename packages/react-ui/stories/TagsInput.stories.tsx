import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { Field, FieldInput } from "../src/components/Field"
import {
	TagsInput,
	TagsInputLabel,
	TagsInputControl,
	TagsInputInput,
	TagsInputClearTrigger,
	TagsInputContext,
	TagsInputHiddenInput,
} from "../src/components/TagsInput"
import Close from "@openepi/icons/icons/Close"
import { HStack } from "../styled-system/jsx"
import {
	Tag,
	TagDeleteTrigger,
	TagInput,
	TagPreview,
	TagText,
} from "../src/components/Tag"
import { IconButton } from "../src/components/IconButton"
import { InputGroup } from "../src/components/InputGroup"

const meta: Meta<typeof TagsInput> = {
	title: "Components/TagsInput",
	component: TagsInput,
	tags: ["autodocs"],
	render: (args) => (
		<TagsInput max={2} allowOverflow>
			<TagsInputContext>
				{(tagsInput) => (
					<>
						{/* <TagsInputLabel>Frameworks</TagsInputLabel> */}
						<InputGroup
							rightComponent={
								<TagsInputClearTrigger asChild>
									<IconButton
										size="2xs"
										colorPalette="gray"
										variant="outline"
										icon={<Close />}
									/>
								</TagsInputClearTrigger>
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
										<TagInput />
									</Tag>
								))}
								<TagsInputInput placeholder="Add Framework" />
							</TagsInputControl>
						</InputGroup>
					</>
				)}
			</TagsInputContext>

			<TagsInputHiddenInput />
		</TagsInput>
	),
}

export default meta

export const Default: StoryObj<typeof TagsInput> = {}

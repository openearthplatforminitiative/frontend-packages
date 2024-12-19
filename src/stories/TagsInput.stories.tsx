import { Meta, StoryObj } from "@storybook/react"
import {
	TagsInput,
	TagsInputControl,
	TagsInputInput,
	TagsInputClearTrigger,
	TagsInputContext,
	TagsInputHiddenInput,
	TagsInputItem,
	TagsInputItemDeleteTrigger,
	TagsInputItemInput,
	TagsInputItemPreview,
	TagsInputItemText,
} from "@openepi/react-ui/TagsInput"
import { Close } from "@openepi/icons/icons"
import {} from "@openepi/react-ui/Tag"
import { IconButton } from "@openepi/react-ui/IconButton"
import { InputGroup } from "@openepi/react-ui/InputGroup"

const meta: Meta<typeof TagsInput> = {
	title: "Form Components/TagsInput",
	component: TagsInput,
	tags: ["autodocs"],
	render: () => (
		<TagsInput max={2} allowOverflow>
			<TagsInputContext>
				{(tagsInput) => (
					<>
						{/* <TagsInputLabel>Frameworks</TagsInputLabel> */}
						<InputGroup
							rightComponent={
								<TagsInputClearTrigger asChild>
									<IconButton
										size="xs"
										colorPalette="gray"
										variant="outline"
										icon={<Close />}
									/>
								</TagsInputClearTrigger>
							}
						>
							<TagsInputControl>
								{tagsInput.value.map((value, index) => (
									<TagsInputItem key={index} index={index} value={value}>
										<TagsInputItemPreview>
											<TagsInputItemText>{value}</TagsInputItemText>
											<TagsInputItemDeleteTrigger>
												<Close />
											</TagsInputItemDeleteTrigger>
										</TagsInputItemPreview>
										<TagsInputItemInput />
									</TagsInputItem>
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

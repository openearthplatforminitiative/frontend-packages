import { type Meta, type StoryFn, type StoryObj } from "@storybook/react"
import {
	Card,
	CardBody,
	CardContent,
	CardDescription,
	CardOuterIcon,
	CardTitle,
} from "@openepi/react-ui"
import { HStack, VStack } from "@openepi/styled-system/jsx"
import Image from "next/image"
import { Icon } from "@openepi/react-ui"
import {
	Cardiology,
	Forest,
	LocationOn,
	Psychiatry,
	Rainy,
	Water,
} from "@openepi/icons"

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	tags: ["autodocs"],
	render: (args) => (
		<Card {...args}>
			<CardContent>
				<CardBody>
					<CardOuterIcon>
						<Icon>
							<Water />
						</Icon>
					</CardOuterIcon>
					<CardTitle>Flood</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
	),
}

export default meta

export const Default: StoryObj<typeof Card> = {}

export const External: StoryFn = (args) => (
	<HStack gap="8" flexWrap="wrap">
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardOuterIcon>
						<Icon>
							<Rainy />
						</Icon>
					</CardOuterIcon>
					<CardTitle external>Weather</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardOuterIcon>
						<Icon>
							<Water />
						</Icon>
					</CardOuterIcon>
					<CardTitle external>Flood</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardOuterIcon>
						<Icon>
							<LocationOn />
						</Icon>
					</CardOuterIcon>
					<CardTitle external>Geocoding</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardOuterIcon>
						<Icon>
							<Forest />
						</Icon>
					</CardOuterIcon>
					<CardTitle external>Deforestation</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardOuterIcon>
						<Icon>
							<Psychiatry />
						</Icon>
					</CardOuterIcon>
					<CardTitle external>Soil</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardOuterIcon>
						<Icon>
							<Cardiology />
						</Icon>
					</CardOuterIcon>
					<CardTitle external>Crop Health</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
	</HStack>
)

export const WithoutIcon: StoryFn = (args) => (
	<HStack>
		<Card {...args}>
			<CardContent>
				<CardBody>
					<CardTitle>Flood</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
	</HStack>
)

export const WithImage: StoryFn = (args) => (
	<HStack>
		<Card {...args} external>
			<CardContent>
				<Image
					src="http://localhost:3001/mui.png"
					alt="Material UI Logo"
					width={0}
					height={0}
					style={{ width: "100%", height: "auto" }}
				/>
				<CardBody>
					<CardTitle external>Material UI</CardTitle>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<Image
					src="http://localhost:3001/next.png"
					alt="Next JS Logo"
					width={0}
					height={0}
					style={{ width: "100%", height: "auto" }}
				/>
				<CardBody>
					<CardTitle external>Next JS</CardTitle>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<Image
					src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png"
					alt="Typescript Logo"
					width={0}
					height={0}
					style={{ width: "100%", height: "auto" }}
				/>
				<CardBody>
					<CardTitle external>Typescript</CardTitle>
				</CardBody>
			</CardContent>
		</Card>
	</HStack>
)

export const WithoutDescription: StoryFn = (args) => (
	<VStack>
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardTitle external>Our open policy</CardTitle>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardTitle external>Our metadata specification</CardTitle>
				</CardBody>
			</CardContent>
		</Card>
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardTitle external>OpenAPI Specification</CardTitle>
				</CardBody>
			</CardContent>
		</Card>
	</VStack>
)

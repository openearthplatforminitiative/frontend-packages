import { Meta, StoryObj } from "@storybook/react"
import {
	Card,
	CardBody,
	CardContent,
	CardDescription,
	CardOuterIcon,
	CardTitle,
} from "../src/components/Card"
import { HStack } from "../styled-system/jsx"
import Image from "next/image"
import { VStack } from "../styled-system/jsx"

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	tags: ["autodocs"],
	render: (args) => (
		<Card {...args}>
			<CardContent>
				<CardBody>
					<CardOuterIcon icon="Water" />
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

export const External = (args) => (
	<HStack gap="8" flexWrap="wrap">
		<Card {...args} external>
			<CardContent>
				<CardBody>
					<CardOuterIcon icon="Rainy" />
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
					<CardOuterIcon icon="Water" />
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
					<CardOuterIcon icon="LocationOn" />
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
					<CardOuterIcon icon="Forest" />
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
					<CardOuterIcon icon="Psychiatry" />
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
					<CardOuterIcon icon="Cardiology" />
					<CardTitle external>Crop Health</CardTitle>
					<CardDescription>
						This section provides access to real-time flood forecasts.
					</CardDescription>
				</CardBody>
			</CardContent>
		</Card>
	</HStack>
)

export const WithoutIcon = (args) => (
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

export const WithImage = (args) => (
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

export const WithoutDescription = (args) => (
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

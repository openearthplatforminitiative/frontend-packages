import * as React from "react"
import type { SVGProps } from "react"
const SvgIntegrationInstructions = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m384-335 43-43-101-102 101-101-43-43-144 144.5zm192 0 145-145-144-144-43 43 101 101-102 102zM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h205q5-35 32-57.5t63-22.5 63 22.5 32 57.5h205q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120zm0-60h600v-600H180zm300-617q14 0 24.5-10.5T515-832t-10.5-24.5T480-867t-24.5 10.5T445-832t10.5 24.5T480-797M180-180v-600z" />
	</svg>
)
export default SvgIntegrationInstructions

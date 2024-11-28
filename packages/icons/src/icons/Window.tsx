import * as React from "react"
import type { SVGProps } from "react"
const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120zm330-330v270h270v-270zm0-60h270v-270H510zm-60 0v-270H180v270zm0 60H180v270h270z" />
	</svg>
)
export default SvgWindow

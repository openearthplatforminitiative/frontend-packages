import * as React from "react"
import type { SVGProps } from "react"
const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-136H634q-26 40-67.5 61.5T480-233t-86.5-21.5T326-316H180zm300.25-113Q521-293 554-316.5t56-59.5h170v-404H180v404h170q23 36 56.25 59.5 33.24 23.5 74 23.5M180-180h600z" />
	</svg>
)
export default SvgInbox

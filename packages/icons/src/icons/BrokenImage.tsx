import * as React from "react"
import type { SVGProps } from "react"
const SvgBrokenImage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm43-314 172-172 170 170 171-171 44 44v-217H180v303zm-43 254h600v-298l-44-44-171 171-170-170-172 172-43-43zm0 0v-298 60-362z" />
	</svg>
)
export default SvgBrokenImage
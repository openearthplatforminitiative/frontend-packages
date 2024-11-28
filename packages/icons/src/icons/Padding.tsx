import * as React from "react"
import type { SVGProps } from "react"
const SvgPadding = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M307-628q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m173 0q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m173 0q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
	</svg>
)
export default SvgPadding

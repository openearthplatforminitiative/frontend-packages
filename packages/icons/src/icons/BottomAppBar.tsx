import * as React from "react"
import type { SVGProps } from "react"
const SvgBottomAppBar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-203v143h600v-143H548q-14 14-31.16 22-17.17 8-37 8-19.84 0-36.84-8t-31-22zm300-30q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m-300-30h210q0-36 27-63t63-27 63 27 27 63h210v-397H180zm0 203h600z" />
	</svg>
)
export default SvgBottomAppBar

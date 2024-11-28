import * as React from "react"
import type { SVGProps } from "react"
const SvgViewDayFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-160v-60h720v60zm0-580v-60h720v60zm60 409q-24 0-42-18t-18-42v-178q0-24 18-42t42-18h600q24 0 42 18t18 42v178q0 24-18 42t-42 18z" />
	</svg>
)
export default SvgViewDayFill

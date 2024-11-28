import * as React from "react"
import type { SVGProps } from "react"
const SvgExpansionPanels = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m480-242 153-153-44-44-109 109-109-109-44 44zM371-521l109-109 109 109 44-44-153-153-153 153zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
	</svg>
)
export default SvgExpansionPanels

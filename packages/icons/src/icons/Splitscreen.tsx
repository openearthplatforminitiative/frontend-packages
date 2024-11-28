import * as React from "react"
import type { SVGProps } from "react"
const SvgSplitscreen = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-533q-24 0-42-18t-18-42v-187q0-24 18-42t42-18h600q24 0 42 18t18 42v187q0 24-18 42t-42 18zm0-60h600v-187H180zm0 473q-24 0-42-18t-18-42v-188q0-24 18-42t42-18h600q24 0 42 18t18 42v188q0 24-18 42t-42 18zm0-60h600v-188H180zm0-413v-187zm0 413v-188z" />
	</svg>
)
export default SvgSplitscreen

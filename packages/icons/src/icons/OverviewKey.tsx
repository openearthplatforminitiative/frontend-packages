import * as React from "react"
import type { SVGProps } from "react"
const SvgOverviewKey = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M100-200q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h440q24 0 42 18t18 42v440q0 24-18 42t-42 18zm0-60h440v-440H100zm600 60v-560h60v560zm160 0v-560h60v560zm-760-60v-440z" />
	</svg>
)
export default SvgOverviewKey

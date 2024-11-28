import * as React from "react"
import type { SVGProps } from "react"
const SvgLineWeight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-160v-30h720v30zm0-90v-60h720v60zm0-120v-90h720v90zm0-150v-280h720v280z" />
	</svg>
)
export default SvgLineWeight

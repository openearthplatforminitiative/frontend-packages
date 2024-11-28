import * as React from "react"
import type { SVGProps } from "react"
const SvgSegment = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M360-240v-60h480v60zm0-210v-60h480v60zM120-660v-60h720v60z" />
	</svg>
)
export default SvgSegment

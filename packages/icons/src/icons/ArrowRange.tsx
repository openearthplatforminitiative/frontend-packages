import * as React from "react"
import type { SVGProps } from "react"
const SvgArrowRange = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M266-293 80-479l186-186 42 43-113 112h569L651-622l43-43 185 186-186 186-43-43 114-113H194l114 113z" />
	</svg>
)
export default SvgArrowRange

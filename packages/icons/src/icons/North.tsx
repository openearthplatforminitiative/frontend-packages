import * as React from "react"
import type { SVGProps } from "react"
const SvgNorth = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-80v-686L242-558l-42-42 280-280 280 280-42 42-208-208v686z" />
	</svg>
)
export default SvgNorth

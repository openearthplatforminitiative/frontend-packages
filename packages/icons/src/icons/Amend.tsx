import * as React from "react"
import type { SVGProps } from "react"
const SvgAmend = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M280-340h400v-60H280zm0-140h160v-60h-57q20-19 45-29.5t52-10.5q47 0 83.5 27.5T614-480h62q-14-70-69-115t-127-45q-39 0-75.5 15T340-582v-58h-60zM480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80m0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140m0-340" />
	</svg>
)
export default SvgAmend
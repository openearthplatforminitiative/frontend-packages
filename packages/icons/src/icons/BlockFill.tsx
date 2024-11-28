import * as React from "react"
import type { SVGProps } from "react"
const SvgBlockFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-60q61.01 0 117.51-20.5Q654-181 699-220L220-699q-38 46-59 102.17T140-480q0 142.37 98.81 241.19Q337.63-140 480-140m259-121q37-45 59-101.49 22-56.5 22-117.51 0-142.38-98.81-241.19T480-820q-60.66 0-116.83 21T261-739z" />
	</svg>
)
export default SvgBlockFill

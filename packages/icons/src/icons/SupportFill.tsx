import * as React from "react"
import type { SVGProps } from "react"
const SvgSupportFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-121-80 63-150q-38-13-67.5-41.5T310-421l-150 60q31 71 82 123t117 78m-50-378q16-41 45-70t67-42l-60-150q-75 31-127 83.5T160-598zm171 178q50 0 85-35t35-85-35-85-85-35-85 35-35 85 35 85 85 35m121 200q69-28 120-79.5T800-359l-150-62q-15 42-44.5 70.5T538-310zm49-379 150-62q-28-68-79.5-119.5T601-800l-61 150q38 13 66 41.5t44 69.5" />
	</svg>
)
export default SvgSupportFill

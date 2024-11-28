import * as React from "react"
import type { SVGProps } from "react"
const SvgCloudCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M337-333h302q47 0 81-29.5t34-74.5-34-74-81-29q-5-62-47-106.5T488-691q-52 0-94.5 28.5T337-584q-54 0-92 36.5T207-458t38 89 92 36m0-60q-29 0-49.5-18.5T267-458t20.5-47 49.5-19h52v-16q0-39 29.5-65t69.5-26q38 0 64.5 26.5T579-540v60h60q21 0 38 11.5t17 31.5-16.5 32-38.5 12zM480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80m0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140m0-340" />
	</svg>
)
export default SvgCloudCircle

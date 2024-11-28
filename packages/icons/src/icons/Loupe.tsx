import * as React from "react"
import type { SVGProps } from "react"
const SvgLoupe = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-278h60v-168h168v-60H510v-168h-60v168H282v60h168zm29.59 198Q397-80 324-111.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480v318q0 33.82-24.09 57.91Q831.83-80 798-80zm.41-60q142.38 0 241.19-98.81Q820-337.63 820-480q0-142.38-98.81-241.19T480-820q-142.37 0-241.19 98.81Q140-622.38 140-480q0 142.37 98.81 241.19Q337.63-140 480-140m0-336" />
	</svg>
)
export default SvgLoupe

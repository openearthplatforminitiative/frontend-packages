import * as React from "react"
import type { SVGProps } from "react"
const SvgShapes = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M320-262q10 2 19.5 2H360q5.5 0 10.25-.25T380-261v121h440v-440H699q.5-5 .75-9.75T700-600v-20.5q0-9.5-2-19.5h122q24.75 0 42.38 17.62Q880-604.75 880-580v440q0 24.75-17.62 42.37Q844.75-80 820-80H380q-24.75 0-42.37-17.63Q320-115.25 320-140zm40-58q-117 0-198.5-81.5T80-600t81.5-198.5T360-880t198.5 81.5T640-600t-81.5 198.5T360-320m-.21-60q91.21 0 155.71-64.29t64.5-155.5-64.29-155.71-155.5-64.5-155.71 64.29-64.5 155.5 64.29 155.71 155.5 64.5m.21-220" />
	</svg>
)
export default SvgShapes
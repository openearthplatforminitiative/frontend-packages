import * as React from "react"
import type { SVGProps } from "react"
const SvgShapesFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M360-320q-117 0-198.5-81.5T80-600t81.5-198.5T360-880t198.5 81.5T640-600t-81.5 198.5T360-320m-40 180v-122q10 2 20 2h20q141.67 0 240.83-99.17Q700-458.33 700-600v-20q0-10-2-20h122q24.75 0 42.38 17.62Q880-604.75 880-580v440q0 24.75-17.62 42.37Q844.75-80 820-80H380q-24.75 0-42.37-17.63Q320-115.25 320-140" />
	</svg>
)
export default SvgShapesFill
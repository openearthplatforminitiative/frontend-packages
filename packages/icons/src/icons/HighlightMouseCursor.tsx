import type { SVGProps } from "react"
const SvgHighlightMouseCursor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M516-82.47q-9 1.47-18 1.97t-18 .5q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480q0 9-.5 18t-1.97 18L820-462v-18q0-142.38-98.81-241.19T480-820q-142.37 0-241.19 98.81Q140-622.38 140-480q0 142.37 98.81 241.19Q337.63-140 480-140h18zM821-60 650-231 600-80 480-480l400 120-151 50 171 171z" />
	</svg>
)
export default SvgHighlightMouseCursor

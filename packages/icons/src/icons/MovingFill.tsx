import type { SVGProps } from "react"
const SvgMovingFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m122-240-42-42 219-219q32-32 78-32t78 32l46 46q15 15 35.5 15t35.5-15l205-205H660v-60h220v220h-60v-117L614-412q-32 32-78 32t-78-32l-47-47q-14-14-35-14t-35 14z" />
	</svg>
)
export default SvgMovingFill

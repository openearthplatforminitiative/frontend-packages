import type { SVGProps } from "react"
const SvgGroupedBarChart = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-160v-480h140v480zm210 0v-280h140v280zm290 0v-640h140v640z" />
	</svg>
)
export default SvgGroupedBarChart

import type { SVGProps } from "react"
const SvgStraightFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-120v-606l-90 90-42-42 162-162 162 162-42 42-90-90v606z" />
	</svg>
)
export default SvgStraightFill

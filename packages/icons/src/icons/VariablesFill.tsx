import type { SVGProps } from "react"
const SvgVariablesFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-280v-400h720v400z" />
	</svg>
)
export default SvgVariablesFill

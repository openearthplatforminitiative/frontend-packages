import type { SVGProps } from "react"
const SvgTitleFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M430-160v-540H200v-100h560v100H530v540z" />
	</svg>
)
export default SvgTitleFill

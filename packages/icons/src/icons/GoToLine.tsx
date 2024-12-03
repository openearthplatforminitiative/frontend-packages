import type { SVGProps } from "react"
const SvgGoToLine = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M430-700v-100h100v100zm0 540v-100h100v100z" />
	</svg>
)
export default SvgGoToLine

import type { SVGProps } from "react"
const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-360 280-559h400z" />
	</svg>
)
export default SvgArrowDropDown

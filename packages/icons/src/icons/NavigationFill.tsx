import type { SVGProps } from "react"
const SvgNavigationFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m190-120-30-30 320-730 320 730-30 30-290-132z" />
	</svg>
)
export default SvgNavigationFill

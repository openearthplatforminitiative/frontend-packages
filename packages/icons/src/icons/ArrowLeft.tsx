import type { SVGProps } from "react"
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M560-280 360-480l200-200z" />
	</svg>
)
export default SvgArrowLeft

import type { SVGProps } from "react"
const SvgPentagonFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-120 80-600l400-280 400 280-160 480z" />
	</svg>
)
export default SvgPentagonFill

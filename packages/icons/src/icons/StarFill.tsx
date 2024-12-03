import type { SVGProps } from "react"
const SvgStarFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149z" />
	</svg>
)
export default SvgStarFill

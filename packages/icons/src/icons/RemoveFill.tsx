import type { SVGProps } from "react"
const SvgRemoveFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-450v-60h560v60z" />
	</svg>
)
export default SvgRemoveFill

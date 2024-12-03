import type { SVGProps } from "react"
const SvgFilterListFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M400-240v-60h160v60zM240-450v-60h480v60zM120-660v-60h720v60z" />
	</svg>
)
export default SvgFilterListFill

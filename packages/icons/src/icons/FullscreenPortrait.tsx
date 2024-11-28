import * as React from "react"
import type { SVGProps } from "react"
const SvgFullscreenPortrait = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M280-200h400v-560H280zm520 60q0 24-18 42t-42 18H220q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42zm-60 0v-680H220v680zm0-680H220z" />
	</svg>
)
export default SvgFullscreenPortrait

import * as React from "react"
import type { SVGProps } from "react"
const SvgDocs = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M320-460h320v-60H320zm0 120h320v-60H320zm0 120h200v-60H320zM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm331-554v-186H220v680h520v-494zM220-820v186zv680z" />
	</svg>
)
export default SvgDocs
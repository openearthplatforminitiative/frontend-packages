import * as React from "react"
import type { SVGProps } from "react"
const SvgDock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M320-40v-60h320v60zm-40-120q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h400q24 0 42 18t18 42v640q0 24-18 42t-42 18zm0-120v60h400v-60zm0-60h400v-400H280zm0-460h400v-60H280zm0 0v-60zm0 520v60z" />
	</svg>
)
export default SvgDock

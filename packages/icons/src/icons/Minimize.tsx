import * as React from "react"
import type { SVGProps } from "react"
const SvgMinimize = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-120v-60h481v60z" />
	</svg>
)
export default SvgMinimize

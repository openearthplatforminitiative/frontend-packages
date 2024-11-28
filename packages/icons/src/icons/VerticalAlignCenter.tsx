import * as React from "react"
import type { SVGProps } from "react"
const SvgVerticalAlignCenter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-80v-202l-86 86-44-44 160-160 160 160-44 44-86-86v202zM160-450v-60h640v60zm320-110L320-720l44-44 86 86v-202h60v202l86-86 44 44z" />
	</svg>
)
export default SvgVerticalAlignCenter

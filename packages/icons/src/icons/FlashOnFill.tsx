import * as React from "react"
import type { SVGProps } from "react"
const SvgFlashOnFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M400-80v-320H280v-480h400l-80 280h160z" />
	</svg>
)
export default SvgFlashOnFill

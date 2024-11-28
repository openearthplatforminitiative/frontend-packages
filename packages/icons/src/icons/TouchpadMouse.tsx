import * as React from "react"
import type { SVGProps } from "react"
const SvgTouchpadMouse = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M659.8-140q66.2 0 113.2-46.86 47-46.85 47-113.14v-70H500v70q0 66.29 46.8 113.14Q593.6-140 659.8-140M500-430h130v-147q-54 11-90 51.5T500-430m190 0h130q-4-55-40-95.5T690-577zM660-80q-92 0-156-64t-64-156v-120q0-92 64-156t156-64 156 64 64 156v120q0 92-64 156T660-80M140-220v-520zm0 60q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42H140v520h240v60z" />
	</svg>
)
export default SvgTouchpadMouse

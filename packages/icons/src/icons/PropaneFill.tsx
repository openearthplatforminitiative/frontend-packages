import * as React from "react"
import type { SVGProps } from "react"
const SvgPropaneFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M390-720h180v-50H390zM280-120v-120q-100 0-170-70T40-480t70-170 170-70h40v-60q0-24 18-42t42-18h200q24 0 42 18t18 42v60h40q100 0 170 70t70 170-70 170-170 70v120h-60v-120H340v120z" />
	</svg>
)
export default SvgPropaneFill
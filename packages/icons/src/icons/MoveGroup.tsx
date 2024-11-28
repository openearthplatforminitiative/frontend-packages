import * as React from "react"
import type { SVGProps } from "react"
const SvgMoveGroup = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M260-200q-24 0-42-18t-18-42v-160h60v160h560v-500H260v160h-60v-220q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60zm360-264-42-42 93-94H200v-60h351l-93-94 42-42 166 166z" />
	</svg>
)
export default SvgMoveGroup

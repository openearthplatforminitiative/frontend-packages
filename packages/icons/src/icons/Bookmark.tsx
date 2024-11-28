import * as React from "react"
import type { SVGProps } from "react"
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240zm60-91 220-93 220 93v-574H260zm0-574h440z" />
	</svg>
)
export default SvgBookmark

import * as React from "react"
import type { SVGProps } from "react"
const SvgComment = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-400h480v-60H240zm0-130h480v-60H240zm0-130h480v-60H240zM880-80 720-240H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42zM140-300h606l74 80v-600H140zm0 0v-520z" />
	</svg>
)
export default SvgComment

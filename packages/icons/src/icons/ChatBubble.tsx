import * as React from "react"
import type { SVGProps } from "react"
const SvgChatBubble = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240zm134-220h606v-520H140v600zm-74 0v-520z" />
	</svg>
)
export default SvgChatBubble

import * as React from "react"
import type { SVGProps } from "react"
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h520v-680h-60v266l-97-56-97 56v-266H220zm0 0v-680zm266-414 97-56 97 56-97-56z" />
	</svg>
)
export default SvgBook

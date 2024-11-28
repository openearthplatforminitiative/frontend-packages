import * as React from "react"
import type { SVGProps } from "react"
const SvgInput = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-160q-24 0-42-18t-18-42v-169h60v169h680v-520H140v171H80v-171q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm319-143-43-43 103-103H80v-60h439L416-612l43-43 176 176z" />
	</svg>
)
export default SvgInput

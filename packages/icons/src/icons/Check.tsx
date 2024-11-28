import * as React from "react"
import type { SVGProps } from "react"
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M378-246 154-470l43-43 181 181 384-384 43 43z" />
	</svg>
)
export default SvgCheck

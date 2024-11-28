import * as React from "react"
import type { SVGProps } from "react"
const SvgFlightLand = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-60h720v60zm633-209L120-510v-278l79 22 50 144 164 47-36-355 97 28 132 383 183 52q22 7 36.5 25.5T840-398q0 32-25.5 56T753-329" />
	</svg>
)
export default SvgFlightLand

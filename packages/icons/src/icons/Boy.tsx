import * as React from "react"
import type { SVGProps } from "react"
const SvgBoy = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M479.9-680q-24.9 0-42.4-17.6T420-740.1t17.6-42.4 42.5-17.5 42.4 17.6 17.5 42.5-17.6 42.4-42.5 17.5M420-160v-200h-40v-200q0-24.75 17.63-42.38Q415.25-620 440-620h80q24.75 0 42.38 17.62Q580-584.75 580-560v200h-40v200z" />
	</svg>
)
export default SvgBoy

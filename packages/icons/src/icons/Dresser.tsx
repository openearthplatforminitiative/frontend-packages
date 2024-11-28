import * as React from "react"
import type { SVGProps } from "react"
const SvgDresser = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-120v-660q0-24.75 17.63-42.38Q195.25-840 220-840h520q24.75 0 42.38 17.62Q800-804.75 800-780v660h-60v-80H220v80zm60-400h230v-260H220zm290-160h230v-100H510zm0 160h230v-100H510zM410-330h140v-60H410zM220-460v200h520v-200zm0 0v200z" />
	</svg>
)
export default SvgDresser

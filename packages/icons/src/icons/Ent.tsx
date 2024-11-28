import * as React from "react"
import type { SVGProps } from "react"
const SvgEnt = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l55 218q4 14-5 25.5T853-360h-93v140q0 24.75-17.62 42.37Q724.75-160 700-160H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.42 26.32 122.39Q232.65-342.09 281-297l19 18v199zm134 0h60l26-250h130v-60H466l5.71-55.19Q474-464 487.97-477q13.98-13 33.03-13h149v-60H522q-43.08 0-74.25 28.42Q416.58-493.17 412-451z" />
	</svg>
)
export default SvgEnt
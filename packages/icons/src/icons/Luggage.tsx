import * as React from "react"
import type { SVGProps } from "react"
const SvgLuggage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M260-120q-24.75 0-42.37-17.63Q200-155.25 200-180v-480q0-24.75 17.63-42.38Q235.25-720 260-720h105v-100q0-24.75 17.63-42.38Q400.25-880 425-880h110q24.75 0 42.38 17.62Q595-844.75 595-820v100h105q24.75 0 42.38 17.62Q760-684.75 760-660v480q0 24.75-17.62 42.37Q724.75-120 700-120q0 17-11.5 28.5T660-80t-28.5-11.5T620-120H340q0 17-11.5 28.5T300-80t-28.5-11.5T260-120m0-60h440v-480H260zm105-60h60v-360h-60zm170 0h60v-360h-60zM425-720h110v-100H425zm55 300" />
	</svg>
)
export default SvgLuggage
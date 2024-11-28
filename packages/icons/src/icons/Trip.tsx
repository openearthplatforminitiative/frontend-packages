import * as React from "react"
import type { SVGProps } from "react"
const SvgTrip = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-120q-24.75 0-42.37-17.63Q80-155.25 80-180v-480q0-24.75 17.63-42.38Q115.25-720 140-720h180v-100q0-24.75 17.63-42.38Q355.25-880 380-880h200q24.75 0 42.38 17.62Q640-844.75 640-820v100h180q24.75 0 42.38 17.62Q880-684.75 880-660v480q0 24.75-17.62 42.37Q844.75-120 820-120zm240-600h200v-100H380zm-133 60H140v480h107zm407 480v-480H307v480zm60-480v480h106v-480zM480-425" />
	</svg>
)
export default SvgTrip
import * as React from "react"
import type { SVGProps } from "react"
const SvgStackStar = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m516-243 84-50 84 50-22-95 73-64-97-8-38-90-38 90-97 8 73 64zM260-380v60H140q-24.75 0-42.37-17.63Q80-355.25 80-380v-440q0-24.75 17.63-42.38Q115.25-880 140-880h440q24.75 0 42.38 17.62Q640-844.75 640-820v120h-60v-120H140v440zM380-80q-24.75 0-42.37-17.63Q320-115.25 320-140v-440q0-24.75 17.63-42.38Q355.25-640 380-640h440q24.75 0 42.38 17.62Q880-604.75 880-580v440q0 24.75-17.62 42.37Q844.75-80 820-80zm0-60h440v-440H380zm220-220" />
	</svg>
)
export default SvgStackStar
import * as React from "react"
import type { SVGProps } from "react"
const SvgGuardian = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-40q-186 0-313-68T40-275q0-79 73.5-135T310-481v60q-96 9-153 49t-57 97q0 69 114 122t266 53 266-53 114-122q0-58-57.5-97.5T650-421v-60q122 14 196 70.5T920-275q0 100-127 167.5T480-40M370-204v-454H160v-60h640v60H590v454h-60v-205H430v205zm110.2-574q-29.2 0-50.2-20.8-21-20.79-21-50 0-29.2 20.8-50.2 20.79-21 50-21 29.2 0 50.2 20.8 21 20.79 21 50 0 29.2-20.8 50.2-20.79 21-50 21" />
	</svg>
)
export default SvgGuardian

import * as React from "react"
import type { SVGProps } from "react"
const SvgSpeakerFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M700-80H260q-24.75 0-42.37-17.63Q200-115.25 200-140v-680q0-24.75 17.63-42.38Q235.25-880 260-880h440q24.75 0 42.38 17.62Q760-844.75 760-820v680q0 24.75-17.62 42.37Q724.75-80 700-80M481-604q32 0 54-22t22-54-22-54-54-22-54 22-22 54 22 54 54 22m-1 408q69 0 116.5-47.5T644-360t-47.5-116.5T480-524t-116.5 47.5T316-360t47.5 116.5T480-196m-.07-60q-42.93 0-73.43-30.57t-30.5-73.5 30.57-73.43 73.5-30.5 73.43 30.57 30.5 73.5-30.57 73.43-73.5 30.5" />
	</svg>
)
export default SvgSpeakerFill

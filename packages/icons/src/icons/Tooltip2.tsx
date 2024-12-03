import type { SVGProps } from "react"
const SvgTooltip2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-399h313v-60H240zm0-130h480v-60H240zm0-130h480v-60H240zM480-80 376-237H140q-24.75 0-42.37-17.63Q80-272.25 80-297v-523q0-24.75 17.63-42.38Q115.25-880 140-880h680q24.75 0 42.38 17.62Q880-844.75 880-820v523q0 24.75-17.62 42.37Q844.75-237 820-237H584zm0-108 72-109h268v-523H140v523h268zm0-371" />
	</svg>
)
export default SvgTooltip2

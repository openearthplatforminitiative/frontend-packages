import * as React from "react"
import type { SVGProps } from "react"
const SvgWeatherHail = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m500-42-53-53 53-53 53 53zm-138-60-35-35 111-111 35 35zm258-60-53-53 53-53 53 53zm-360 0-53-53 53-53 53 53zm30-178q-86.86 0-148.43-61.52T80-549.83Q80-629 136.5-691T277-759q32-56 84.5-88.5T480.42-880q90.58 0 152.08 57.5T708-680q79 4 125.5 53.5T880-510.38Q880-440 830.42-390 780.83-340 710-340zm0-60h420q46.2 0 78.1-32.5t31.9-78-31.9-77.5-78.1-32h-60v-30q0-71-49.5-120.5T480.21-820q-51.48 0-93.84 27.5Q344-765 324-718l-8 18h-28q-62 2-105 45.39-43 43.4-43 104.47Q140-488 183.93-444T290-400m190-210" />
	</svg>
)
export default SvgWeatherHail
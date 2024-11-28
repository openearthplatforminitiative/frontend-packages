import * as React from "react"
import type { SVGProps } from "react"
const SvgMyLocation = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-42v-75q-137-14-228-105T117-450H42v-60h75q14-137 105-228t228-105v-75h60v75q137 14 228 105t105 228h75v60h-75q-14 137-105 228T510-117v75zm30-134q125 0 214.5-89.5T784-480t-89.5-214.5T480-784t-214.5 89.5T176-480t89.5 214.5T480-176m0-154q-63 0-106.5-43.5T330-480t43.5-106.5T480-630t106.5 43.5T630-480t-43.5 106.5T480-330m0-60q38 0 64-26t26-64-26-64-64-26-64 26-26 64 26 64 64 26m0-90" />
	</svg>
)
export default SvgMyLocation

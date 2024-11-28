import * as React from "react"
import type { SVGProps } from "react"
const SvgPace = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 29-4 58t-12 56q-11-11-24.5-19T810-397q5-20 7.5-40.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140q58 0 110-18.5t95-50.5q10 12 22 22t26 16q-52 43-116.5 67T480-80m300-161q-17 0-28.5-11.5T740-281t11.5-28.5T780-321t28.5 11.5T820-281t-11.5 28.5T780-241m-153-46L453-468v-225h60v201l159 160z" />
	</svg>
)
export default SvgPace

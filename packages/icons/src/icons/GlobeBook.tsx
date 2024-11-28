import * as React from "react"
import type { SVGProps } from "react"
const SvgGlobeBook = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M126-427q-2-13-3-26t-1-27q0-75 28-140.5t76.5-114 114-77T480-840t139.5 28.5 114.5 77 77 114T839-480q0 14-1 27t-3 26h-61q2-13 3.5-26t1.5-27q0-13-1-26t-3-26H631q1 13 1.5 26t.5 26q0 14-.5 26.5T631-427h-59q1-11 1-22v-54q0-15-2-29H390q-2 14-2.5 29t-.5 32v22q0 11 1 22h-59q-1-13-1.5-26t-.5-27q0-13 .5-26t1.5-26H186q-2 13-3 26t-1 26q0 14 1.5 27t3.5 26zm77-165h133q9-54 25-96t43-82q-69 18-122 65t-79 113m195 0h164q-8-53-30-101t-52-92q-30 44-52 92t-30 101m226 0h134q-26-66-79.5-113T556-770q27 40 43 82t25 96M450-120v-52q0-57-39-96t-96-39H80v-60h235q50 0 93 23t72 63q29-40 71.5-63t92.5-23h236v60H644q-56 0-95 39.5T510-172v52z" />
	</svg>
)
export default SvgGlobeBook
import * as React from "react"
import type { SVGProps } from "react"
const SvgFort = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M40-120v-156l80-80v-258l-80-80v-146h60v80h100v-80h60v80h100v-80h60v146l-80 80v74h280v-74l-80-80v-146h60v80h100v-80h60v80h100v-80h60v146l-80 80v258l80 80v156H570v-120q0-38-26-64t-64-26-64 26-26 64v120zm60-60h230v-60q0-63 44-106.5T480-390q63 0 106.5 43.5T630-240v60h230v-71l-80-80v-308l61-61H619l61 61v159H280v-159l61-61H119l61 61v308l-80 80zm380-260" />
	</svg>
)
export default SvgFort

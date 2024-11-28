import * as React from "react"
import type { SVGProps } from "react"
const SvgStackedInbox = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M210-240q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h660q24 0 42 18t18 42v480q0 24-18 42t-42 18zm0-214v154h660v-154H680q-19 45-55.5 71.5T540-356t-84.5-26.5T400-454zm330 38q38 0 67-30t29-68h234v-266H210v266h234q0 38 29 68t67 30m199 296H90q-24 0-42-18t-18-42v-469h60v469h649zM210-300h660z" />
	</svg>
)
export default SvgStackedInbox

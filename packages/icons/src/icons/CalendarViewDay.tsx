import * as React from "react"
import type { SVGProps } from "react"
const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-283q-24 0-42-18t-18-42v-274q0-24 18-42t42-18h600q24 0 42 18t18 42v274q0 24-18 42t-42 18zm0-60h600v-274H180zm-60-437v-60h720v60zm0 660v-60h720v60zm60-497v274z" />
	</svg>
)
export default SvgCalendarViewDay

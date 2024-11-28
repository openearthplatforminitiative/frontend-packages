import * as React from "react"
import type { SVGProps } from "react"
const SvgBloodPressure = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-570v-170q0-24 18-42t42-18h680q24 0 42 18t18 42v260h-60v-260H140v170zm200 280q-9 0-16-4t-12-12l-71-144H80v-60h120q7.81 0 14.9 4.5Q222-501 226-493l54 106 133-266q4-8 11.38-11.5t15.5-3.5 15.62 3.5T467-653l80 161q-13 8-25 18.5T499-452l-59-120-134 266q-3.61 8-10.83 12-7.23 4-15.17 4m181 130H140q-24 0-42-18t-18-42v-170h60v170h297q4 16 10 31t14 29m218.89 70Q601-90 545.5-145.61q-55.5-55.6-55.5-134.5 0-78.89 55.61-134.39 55.6-55.5 134.5-55.5 78.89 0 134.39 55.61 55.5 55.6 55.5 134.5 0 78.89-55.61 134.39Q758.79-90 679.89-90M688-260l91-91-28-28-91 91z" />
	</svg>
)
export default SvgBloodPressure
import * as React from "react"
import type { SVGProps } from "react"
const SvgUserAttributes = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M532-700v-60h348v60zm0 160v-60h348v60zm0 160v-60h348v60zm-212-23q-51 0-84.5-33.5T202-521t33.5-84.5T320-639t84.5 33.5T438-521t-33.5 84.5T320-403M80-160v-66q0-18.86 9-35.93T113-286q45-32 98.5-47.5T320-349t108 17 99 46q14 10 23.5 25.5T560-226v66zm55-71v11h370v-11q-39-26-90-42t-95-16-95.5 16-89.5 42m185-232q26 0 42-16t16-42-16-42-42-16-42 16-16 42 16 42 42 16m0 243" />
	</svg>
)
export default SvgUserAttributes

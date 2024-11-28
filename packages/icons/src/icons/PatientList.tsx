import * as React from "react"
import type { SVGProps } from "react"
const SvgPatientList = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M640-403q-51 0-84.5-33.5T522-521t33.5-84.5T640-639t84.5 33.5T758-521t-33.5 84.5T640-403M400-160v-66q0-18.86 9-35.93T433-286q45-32 98.5-47.5T640-349t108 17 99 46q14 10 23.5 25.5T880-226v66zm55-71v11h370v-11q-39-26-90-42t-95-16-95.5 16-89.5 42m185-232q26 0 42-16t16-42-16-42-42-16-42 16-16 42 16 42 42 16m-520 53v-60h306v60zm0-330v-60h473v60zm349 165H120v-60h380q-11 13-18.73 27.92Q473.55-592.16 469-575" />
	</svg>
)
export default SvgPatientList

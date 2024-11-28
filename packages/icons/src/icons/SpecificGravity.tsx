import * as React from "react"
import type { SVGProps } from "react"
const SvgSpecificGravity = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M262-80q-23.25 0-40.5-14.93T202-133l-82-747h720l-82 747q-2.25 23.14-19.5 38.07T698-80zm-54.16-550H378q20.44-19 46.72-29.5T480-670t55.28 10.5T582-630h170l21-190H187zM480-430q38 0 64-26.44T570-520q0-38-26-64t-63.5-26-64 26-26.5 63.5 26.44 64T480-430M214-570l47.96 430H698l47-430H621q5 12 7 24.03 2 12.04 2 25.97 0 63-43.5 106.5T480-370t-106.5-43.5T330-520q0-13.93 2-25.97 2-12.03 7-24.03zm48 430h77-9 300-9 77z" />
	</svg>
)
export default SvgSpecificGravity

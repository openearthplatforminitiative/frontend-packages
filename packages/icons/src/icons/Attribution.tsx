import * as React from "react"
import type { SVGProps } from "react"
const SvgAttribution = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M436-207h88v-180h59v-183q0-24-26-35.5T480-617t-77 11.5-26 35.5v183.49h59zm44 127q-84 0-157-31t-127-85-85-127-31-157q0-83.73 31-156.86Q142-710 196-764t127-85 157-31q83.73 0 156.86 31Q710-818 764-764t85 127.14q31 73.13 31 156.86 0 84-31 157t-85 127-127.14 85Q563.73-80 480-80m0-60q145 0 242.5-97.5T820-480t-97.5-242.5T480-820t-242.5 97.5T140-480t97.5 242.5T480-140m0-506q23.4 0 38.7-15.3T534-700t-15.3-38.7T480-754t-38.7 15.3T426-700t15.3 38.7T480-646m0 166" />
	</svg>
)
export default SvgAttribution

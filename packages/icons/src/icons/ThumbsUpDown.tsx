import * as React from "react"
import type { SVGProps } from "react"
const SvgThumbsUpDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M60-400q-24 0-42-18T0-460v-270q0-10 3-18t11-17l195-195 25 27.5q5 5.5 8 11t3 12.5v8l-31 141h216q21.25 0 35.63 14.37Q480-731.25 480-710v39q0 7-1 12.5t-2 7.5l-93 220q-6.08 14.64-19.54 22.82T330-400zm270-60 90-209v-31H139l28-133L60-725v265zM751 0l-25-27.5q-5-5.5-8-11T715-51v-8l31-141H530q-21.25 0-35.62-14.38Q480-228.75 480-250v-39q0-7 1-12.5t2-7.5l93-220q6-15 19.5-23t34.5-8h270q24 0 42 18t18 42v270q0 10-3 18t-11 17zM630-500l-90 209v31h281l-28 133 107-108v-265zM60-472v-253zm840-16v253z" />
	</svg>
)
export default SvgThumbsUpDown

import * as React from "react"
import type { SVGProps } from "react"
const SvgPanoramaPhotosphere = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-121 0-216.5-63.5T120-308q-11-5-20-9t-18-9q-20-11-31-29t-11-41v-168q0-23 11-41t31-29q9-5 18-9t20-9q48-101 143.5-164.5T480-880t216.5 63.5T840-652q11 5 20 9t18 9q20 11 31 29.5t11 40.5v168q0 22-11 40.5T878-326q-9 5-18 9t-20 9q-48 101-143.5 164.5T480-80m1-60q79 0 151-38t120-105q-63 19-135 30t-136 11q-65 0-138-11t-136-30q52 68 125 105.5T481-140m0-681q-76 0-149 37.5T207-678q63-19 136-30t138-11q64 0 136 11t135 30q-48-67-120-105t-151-38m0 519q112 0 210-23.5T860-387v-187q-71-38-169-61t-210-23q-113 0-211 23t-170 61v187q72 38 170 61.5T481-302" />
	</svg>
)
export default SvgPanoramaPhotosphere
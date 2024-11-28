import * as React from "react"
import type { SVGProps } from "react"
const SvgPunchClock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-80q-23 0-41.5-18.5T120-140v-520q0-23 18.5-41.5T180-720h70v-200h460v200h70q23 0 41.5 18.5T840-660v520q0 23-18.5 41.5T780-80zm130-640h340v-140H310zM180-140h600v-520H180zm300.05-65Q561-205 618-262.05q57-57.06 57-138Q675-481 617.95-538q-57.06-57-138-57Q399-595 342-537.95q-57 57.06-57 138Q285-319 342.05-262q57.06 57 138 57m0-50Q420-255 377.5-297.45T335-399.95t42.45-102.55 102.5-42.5 102.55 42.45 42.5 102.5-42.45 102.55-102.5 42.5M526-326l28-28-54-54v-92h-40v108zm-46-74" />
	</svg>
)
export default SvgPunchClock

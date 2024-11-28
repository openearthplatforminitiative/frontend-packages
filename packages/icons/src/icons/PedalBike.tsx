import * as React from "react"
import type { SVGProps } from "react"
const SvgPedalBike = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M194-160q-81 0-137.5-57T0-355t57.04-137.5T195-549q71 0 124.5 45.5T384-388h51l-82-232h-73v-60h188v60h-52l26 71h222l-71-191H488v-60h99q24 0 40.5 11t24.5 33l76 207h38q80.51 0 137.26 56.23Q960-436.53 960-356.75 960-276 903.74-218T766-160q-71.6 0-125.8-48T574-328H384q-11 72-64.5 120T194-160m0-60q48 0 83.5-31t47.5-77H206v-60h119q-12-45-48-73t-82-28q-56 0-95.5 39T60-355q0 56.25 39 95.62Q138-220 194-220m305-168h76q4-23 15.5-51t31.5-50H463zm267 168q56 0 95-39.38 39-39.37 39-95.62 0-56-39-95t-95-39h-16l39 113-56 19-43-112q-29 17-43.5 48T632-355q0 56.25 39 95.62Q710-220 766-220m0-135" />
	</svg>
)
export default SvgPedalBike

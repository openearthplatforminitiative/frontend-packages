import * as React from "react"
import type { SVGProps } from "react"
const SvgRoute = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M355-120q-65 0-110-45.53T200-275v-349q-35-13-57.5-41.26-22.5-28.27-22.5-64.41Q120-776 152.5-808t78-32 77.5 32.14 32 78.05q0 35.81-22.5 64.31T260-624v349q0 39.19 27.5 67.09Q315-180 355.5-180t67.5-27.91q27-27.9 27-67.09v-410q0-65 45-110t110-45 110 45 45 110v349q35 13 57.5 41.36Q840-266.27 840-230q0 45-32.08 77.5Q775.83-120 730-120q-45 0-77.5-32.5T620-230q0-36.3 22.5-65.15T700-336v-349q0-40-27.5-67.5T605-780t-67.5 27.5T510-685v410q0 63.94-45 109.47T355-120M230.5-680q20.5 0 35-15t14.5-35.5-14.37-35Q251.25-780 230-780q-20 0-35 14.37-15 14.38-15 35.63 0 20 15 35t35.5 15m500 500q20.5 0 35-15t14.5-35.5-14.37-35Q751.25-280 730-280q-20 0-35 14.37-15 14.38-15 35.63 0 20 15 35t35.5 15m-.5-50" />
	</svg>
)
export default SvgRoute

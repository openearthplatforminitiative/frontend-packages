import * as React from "react"
import type { SVGProps } from "react"
const SvgCooking = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M390-120v-130H80v-60h310q24.75 0 42.38 17.62Q450-274.75 450-250v130zm120 0v-130q0-24.75 17.63-42.38Q545.25-310 570-310h310v60H570v130zM230-370q-45.83 0-77.92-32.08Q120-434.17 120-480v-180h720v180q0 45.83-32.08 77.92Q775.83-370 730-370zm0-60h500q21.25 0 35.63-14.38Q780-458.75 780-480v-120H180v120q0 21.25 14.38 35.62Q208.75-430 230-430M120-700v-60h250v-50q0-12.75 8.63-21.38Q387.25-840 400-840h160q12.75 0 21.38 8.62Q590-822.75 590-810v50h250v60zm60 270v-170z" />
	</svg>
)
export default SvgCooking

import * as React from "react"
import type { SVGProps } from "react"
const SvgThermostat = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M523-580v-60h230v60zm0-120v-60h320v60zM296-121q-75.53 0-128.76-53.24Q114-227.47 114-303q0-48 24-90.5t66-68.5v-286q0-38.33 26.76-65.17 26.77-26.83 65-26.83Q334-840 361-813.17q27 26.84 27 65.17v286q42 26 66 68.5t24 90.5q0 75.53-53.23 128.76Q371.53-121 296-121M174-303h244q0-40-19-71.5T348-420l-20-9v-319q0-13.6-9.2-22.8T296-780t-22.8 9.2T264-748v319l-20 9q-32 14-51 46t-19 71" />
	</svg>
)
export default SvgThermostat

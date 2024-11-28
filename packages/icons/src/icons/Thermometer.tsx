import * as React from "react"
import type { SVGProps } from "react"
const SvgThermometer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-120q-75.53 0-128.77-53.24Q298-226.47 298-302q0-49.1 24-91.55T388-462v-286q0-38.33 26.76-65.17 26.77-26.83 65-26.83Q518-840 545-813.17q27 26.84 27 65.17v286q42 26 66 68.45T662-302q0 75.53-53.23 128.76Q555.53-120 480-120m.12-59q50.88 0 86.38-35.88Q602-250.75 602-302q0-37.81-18-70.41Q566-405 532-420l-20-9v-319q0-13.6-9.2-22.8T480-780t-22.8 9.2T448-748v319l-20 9q-34 15-52 47.59-18 32.6-18 70.41 0 51.25 35.62 87.12Q429.24-179 480.12-179M480-302" />
	</svg>
)
export default SvgThermometer
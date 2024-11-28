import * as React from "react"
import type { SVGProps } from "react"
const SvgIos = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-615v-60h60v60zm0 335v-275h60v275zm292 0H347q-24.75 0-42.37-17.63Q287-315.25 287-340v-280q0-24.75 17.63-42.38Q322.25-680 347-680h105q24.75 0 42.38 17.62Q512-644.75 512-620v280q0 24.75-17.62 42.37Q476.75-280 452-280m-105-60h105v-280H347zm228 60v-60h165v-114H635q-24.75 0-42.37-17.63Q575-489.25 575-514v-106q0-24.75 17.63-42.38Q610.25-680 635-680h165v60H635v106h105q24.75 0 42.38 17.62Q800-478.75 800-454v114q0 24.75-17.62 42.37Q764.75-280 740-280z" />
	</svg>
)
export default SvgIos
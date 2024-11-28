import * as React from "react"
import type { SVGProps } from "react"
const SvgPlaceItem = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-440q0-24.75 17.63-42.38Q155.25-680 180-680h210v60H180v440h600v-440H570v-60h210q24.75 0 42.38 17.62Q840-644.75 840-620v440q0 24.75-17.62 42.37Q804.75-120 780-120zm300-203L318-485l43-43 89 89v-521h60v521l89-89 43 43z" />
	</svg>
)
export default SvgPlaceItem

import * as React from "react"
import type { SVGProps } from "react"
const SvgPreviewFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120zm0-60h600v-520H180zm300.04-105Q400-285 337-328.15t-92-112Q274-509 336.96-552t143-43T623-551.85t92 112Q686-371 623.04-328t-143 43m-.16-105q-20.88 0-35.38-14.62t-14.5-35.5 14.62-35.38 35.5-14.5 35.38 14.62 14.5 35.5-14.62 35.38-35.5 14.5m.12 30q33.6 0 56.8-23.2T560-440t-23.2-56.8T480-520t-56.8 23.2T400-440t23.2 56.8T480-360" />
	</svg>
)
export default SvgPreviewFill

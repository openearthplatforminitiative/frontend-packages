import * as React from "react"
import type { SVGProps } from "react"
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-118 0-199-81t-81-199v-260q0-118 81-199t199-81 199 81 81 199v260q0 118-81 199T480-80m30-540h190q0-81-53-144t-137-74zm-250 0h190v-218q-84 11-137 74t-53 144m219.79 480q91.21 0 155.71-64.35T700-360v-200H260v200q0 91.3 64.29 155.65T479.79-140m.21-420" />
	</svg>
)
export default SvgMouse

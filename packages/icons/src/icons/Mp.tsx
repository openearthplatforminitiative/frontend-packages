import * as React from "react"
import type { SVGProps } from "react"
const SvgMp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M233-360h50v-190h57v127h50v-127h56v190h50v-206q0-14.45-9.49-24.22Q477.02-600 463-600H266q-14.02 0-23.51 9.78Q233-580.45 233-566zm317 0h50v-63h93q14.03 0 23.51-9.49Q726-441.98 726-456v-110q0-14.45-9.49-24.22Q707.03-600 693-600H550zm50-113v-77h76v77zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
	</svg>
)
export default SvgMp
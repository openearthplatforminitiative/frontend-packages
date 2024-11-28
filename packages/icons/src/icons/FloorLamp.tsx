import * as React from "react"
import type { SVGProps } from "react"
const SvgFloorLamp = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-200v-320H227q-15.45 0-24.73-12.5Q193-545 198-559l86-279q6.11-18.75 22.13-30.38Q322.16-880 342-880h276q19.84 0 35.87 11.62Q669.89-856.75 676-838l86 279q5 14-4.27 26.5Q748.45-520 733-520H510v320zM267-580h426l-74-240H341zm63 500v-60h300v60zm150-620" />
	</svg>
)
export default SvgFloorLamp
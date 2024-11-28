import * as React from "react"
import type { SVGProps } from "react"
const SvgHealthMetrics = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M280-80v-200H80v-400h200v-200h400v200h200v400H680v200zM140-510h220q7.58 0 14.39 3.61 6.82 3.61 10.61 9.39l46 70 60-182q3.08-9 11.18-15 8.09-6 18.11-6 7.71 0 13.71 4t11 10l71 106h204v-110H620v-200H340v200H140zm200 370h280v-200h200v-110H600q-8 0-14-4t-11-10l-46-69-61 182q-2.97 9-11.15 15T439-330q-8 0-14-4t-10-10l-71-106H140v110h200zm140-340" />
	</svg>
)
export default SvgHealthMetrics

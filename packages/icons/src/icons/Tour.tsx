import * as React from "react"
import type { SVGProps } from "react"
const SvgTour = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-80v-800h60v84h580l-81 193 81 193H260v330zm60-656v266zm241.21 205Q531-531 552-552.21t21-51T551.79-654t-51-21T450-653.79t-21 51T450.21-552t51 21M260-470h491l-55-133 55-133H260z" />
	</svg>
)
export default SvgTour

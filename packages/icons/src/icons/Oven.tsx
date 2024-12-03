import type { SVGProps } from "react"
const SvgOven = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M653-711q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m-173 0q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m-173 0q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m-127 90v441h600v-441zm208 150h185v-60H388zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm300-501" />
	</svg>
)
export default SvgOven

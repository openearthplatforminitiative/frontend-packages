import type { SVGProps } from "react"
const SvgRipplesFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm506-406q25 0 49-6t45-19v-229H549q-13 21-19 44.5t-6 47.5q0 67 47.5 114.5T686-526" />
	</svg>
)
export default SvgRipplesFill

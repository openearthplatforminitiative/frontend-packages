import type { SVGProps } from "react"
const SvgShelfPosition = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-121q-24 0-42-18t-18-42v-599q0-24 18-42t42-18h600q24 0 42 18t18 42v599q0 24-18 42t-42 18zm600-201H180v141h600zm-130-60h130v-398H650zm-470 0h130v-398H180zm190 0h220v-398H370z" />
	</svg>
)
export default SvgShelfPosition

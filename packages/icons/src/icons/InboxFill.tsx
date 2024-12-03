import type { SVGProps } from "react"
const SvgInboxFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm300-173q41 0 74-23.5t56-59.5h170v-404H180v404h170q23 36 56 59.5t74 23.5" />
	</svg>
)
export default SvgInboxFill

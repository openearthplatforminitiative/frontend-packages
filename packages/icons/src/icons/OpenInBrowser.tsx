import type { SVGProps } from "react"
const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H570v-60h210v-540H180v540h210v60zm270 0v-284l-83 83-43-43 156-156 156 156-43 43-83-83v284z" />
	</svg>
)
export default SvgOpenInBrowser

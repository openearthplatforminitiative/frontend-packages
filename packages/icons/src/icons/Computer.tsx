import type { SVGProps } from "react"
const SvgComputer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M40-120v-60h880v60zm100-120q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h680q24 0 42 18t18 42v480q0 24-18 42t-42 18zm0-60h680v-480H140zm0 0v-480z" />
	</svg>
)
export default SvgComputer

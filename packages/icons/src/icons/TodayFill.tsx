import type { SVGProps } from "react"
const SvgTodayFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M352.82-310Q312-310 284-338.18q-28-28.19-28-69Q256-448 284.18-476q28.19-28 69-28Q394-504 422-475.82q28 28.19 28 69Q450-366 421.82-338q-28.19 28-69 28M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18zm0-60h600v-430H180z" />
	</svg>
)
export default SvgTodayFill

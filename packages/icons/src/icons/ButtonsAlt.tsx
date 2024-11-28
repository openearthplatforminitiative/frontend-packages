import * as React from "react"
import type { SVGProps } from "react"
const SvgButtonsAlt = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-240q-24 0-42-18t-18-42v-360q0-24 18-42t42-18h680q24 0 42 18t18 42v360q0 24-18 42t-42 18zm0-60h680v-360H140zm147-60h49v-95h95v-50h-95v-95h-49v95h-95v50h95zm-147 60v-360z" />
	</svg>
)
export default SvgButtonsAlt

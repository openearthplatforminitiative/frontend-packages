import * as React from "react"
import type { SVGProps } from "react"
const SvgPresentToAll = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M451-328h59v-194l79 81 43-43-153-152-152 152 43 43 81-81zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" />
	</svg>
)
export default SvgPresentToAll

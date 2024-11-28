import * as React from "react"
import type { SVGProps } from "react"
const SvgFitWidth = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-720h60v720zm660 0v-720h60v720zM285-450v-60h60v60zm165 0v-60h60v60zm165 0v-60h60v60z" />
	</svg>
)
export default SvgFitWidth

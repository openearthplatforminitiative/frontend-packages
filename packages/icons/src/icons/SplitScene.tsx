import * as React from "react"
import type { SVGProps } from "react"
const SvgSplitScene = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h250v60H140v520h250v60zm310 80v-800h60v80h310q24 0 42 18t18 42v520q0 24-18 42t-42 18H510v80zm60-140h310v-520H510zm-370 0v-520zm680 0v-520z" />
	</svg>
)
export default SvgSplitScene

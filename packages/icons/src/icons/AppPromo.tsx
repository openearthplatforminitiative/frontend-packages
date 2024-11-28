import * as React from "react"
import type { SVGProps } from "react"
const SvgAppPromo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M636-518 480-362 324-518l42-42 84 84v-204h60v204l84-84zM398-125h164v-40H398zM260-40q-24 0-42-18t-18-42v-760q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18zm0-150v90h440v-90zm0-60h440v-520H260zm0-580h440v-30H260zm0 640v90zm0-640v-30z" />
	</svg>
)
export default SvgAppPromo

import * as React from "react"
import type { SVGProps } from "react"
const SvgArrowOrEdgeFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M300-120 154-266l42-43 74 74v-285H100q-24.75 0-42.37-17.63Q40-555.25 40-580v-260h60v260h170q24.75 0 42.38 17.62Q330-544.75 330-520v285l74-73 42 42zm359 0L513-266l42-43 74 74v-285q0-24.75 17.63-42.38Q664.25-580 689-580h171v-260h60v260q0 24.75-17.62 42.37Q884.75-520 860-520H689v285l74-73 42 42z" />
	</svg>
)
export default SvgArrowOrEdgeFill

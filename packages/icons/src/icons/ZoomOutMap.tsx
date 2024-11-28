import * as React from "react"
import type { SVGProps } from "react"
const SvgZoomOutMap = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-230h60v127l148-148 43 43-148 148h127v60zm490 0v-60h127L590-327l43-43 147 147v-127h60v230zM327-590 180-737v127h-60v-230h230v60H223l147 147zm306 0-43-43 147-147H610v-60h230v230h-60v-127z" />
	</svg>
)
export default SvgZoomOutMap

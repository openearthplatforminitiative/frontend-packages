import * as React from "react"
import type { SVGProps } from "react"
const SvgPergola = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-730q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v50h600v-50q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v730h-60v-460H180v460zm60-520h600v-100H180zm270 520v-130H330v-60h300v60H510v130zM180-640v-100z" />
	</svg>
)
export default SvgPergola
import * as React from "react"
import type { SVGProps } from "react"
const SvgAddTriangle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m40-120 440-760 440 760zm104-60h672L480-760zm306-66h60v-83h84v-60h-84v-84h-60v84h-84v60h84zm30-113" />
	</svg>
)
export default SvgAddTriangle
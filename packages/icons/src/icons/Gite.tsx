import * as React from "react"
import type { SVGProps } from "react"
const SvgGite = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-200v-366l154-154h60v-80h60v80h372l154 154v366zm560-60h180v-281l-90-90-90 90zm-500 0h440v-240H140z" />
	</svg>
)
export default SvgGite

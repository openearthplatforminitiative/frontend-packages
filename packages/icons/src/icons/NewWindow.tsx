import * as React from "react"
import type { SVGProps } from "react"
const SvgNewWindow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h300v60H180v600h600v-300h60v300q0 24-18 42t-42 18zm480-420v-120H540v-60h120v-120h60v120h120v60H720v120z" />
	</svg>
)
export default SvgNewWindow

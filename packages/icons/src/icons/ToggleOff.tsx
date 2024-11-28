import * as React from "react"
import type { SVGProps } from "react"
const SvgToggleOff = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M280-240q-100 0-170-70T40-480t70-170 170-70h400q100 0 170 70t70 170-70 170-170 70zm0-60h400q75 0 127.5-52.5T860-480t-52.5-127.5T680-660H280q-75 0-127.5 52.5T100-480t52.5 127.5T280-300m-1.06-79q42.06 0 71.56-29.44t29.5-71.5-29.44-71.56-71.5-29.5-71.56 29.44-29.5 71.5 29.44 71.56 71.5 29.5M480-480" />
	</svg>
)
export default SvgToggleOff

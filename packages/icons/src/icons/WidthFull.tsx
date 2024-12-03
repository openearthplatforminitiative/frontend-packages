import type { SVGProps } from "react"
const SvgWidthFull = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-520q0-24.75 17.63-42.38Q115.25-800 140-800h680q24.75 0 42.38 17.62Q880-764.75 880-740v520q0 24.75-17.62 42.37Q844.75-160 820-160zm0-60h70v-520h-70zm130 0h420v-520H270zm480 0h70v-520h-70zM270-740v520z" />
	</svg>
)
export default SvgWidthFull

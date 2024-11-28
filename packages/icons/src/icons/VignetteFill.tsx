import * as React from "react"
import type { SVGProps } from "react"
const SvgVignetteFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm341-159q99.63 0 171.82-47.5Q725-414 725-480t-72.18-113.5Q580.63-641 481-641t-171.82 47.5Q237-546 237-480t72.18 113.5Q381.37-319 481-319" />
	</svg>
)
export default SvgVignetteFill
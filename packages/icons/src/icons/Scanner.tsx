import * as React from "react"
import type { SVGProps } from "react"
const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M751-460 146-700l22-60 615 244q32 13 44.5 34t12.5 57v205q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-180q0-24 18-42t42-18zm29 240v-180H180v180zm-400-60h340v-60H380zm-109.82 0q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5M180-220v-180z" />
	</svg>
)
export default SvgScanner

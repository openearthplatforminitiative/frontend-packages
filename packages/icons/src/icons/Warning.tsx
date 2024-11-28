import * as React from "react"
import type { SVGProps } from "react"
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m40-120 440-760 440 760zm104-60h672L480-760zm340.18-57q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5M454-348h60v-224h-60zm26-122" />
	</svg>
)
export default SvgWarning

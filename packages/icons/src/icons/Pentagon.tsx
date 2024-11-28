import * as React from "react"
import type { SVGProps } from "react"
const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M283.6-180H676l133-397-329-229-329 229zM240-120 80-600l400-280 400 280-160 480zm240-373" />
	</svg>
)
export default SvgPentagon

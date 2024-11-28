import * as React from "react"
import type { SVGProps } from "react"
const SvgStreetview = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M720-520q-83 0-141.5-58.5T520-720t58.5-141.5T720-920t141.5 58.5T920-720t-58.5 141.5T720-520M147-147q-13-9-20-23t-7-30v-560q0-34 23-57t57-23h269q-14 25-21.5 55t-7.5 65q0 56 22 108t60 90zm333 27v-218q0-44 26.5-77.5T576-457q32-8 69-10.5t75-2.5q35 0 64.5 2t55.5 8v260q0 34-23 57t-57 23z" />
	</svg>
)
export default SvgStreetview

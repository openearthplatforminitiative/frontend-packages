import type { SVGProps } from "react"
const SvgLocationChip = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M360-509.53Q360-453 398-411t82 78q44-36 82-78.19 38-42.18 38-98.74Q600-560 564.89-595t-85-35T395-594.79q-35 35.22-35 85.26M480-480q-17 0-28.5-11.5T440-520t11.5-28.5T480-560t28.5 11.5T520-520t-11.5 28.5T480-480M320-200q-117 0-198.5-81.5T40-480t81.5-198.5T320-760h320q117 0 198.5 81.5T920-480t-81.5 198.5T640-200zm0-60h320q92 0 156-64t64-156-64-156-156-64H320q-92 0-156 64t-64 156 64 156 156 64m160-220" />
	</svg>
)
export default SvgLocationChip

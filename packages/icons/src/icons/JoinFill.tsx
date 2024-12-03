import type { SVGProps } from "react"
const SvgJoinFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M640-200q-34 0-64.5-7.5T516-229q57-50 90.5-114.5T640-480t-33.5-136.5T516-731q29-14 59.5-21.5T640-760q117 0 198.5 81.5T920-480t-81.5 198.5T640-200m-160-50q-54-38-87-98t-33-132 33-132 87-98q55 38 87.5 98T600-480t-32.5 132-87.5 98m-160 50q-117 0-198.5-81.5T40-480t81.5-198.5T320-760q34 0 65 7.5t59 21.5q-57 50-90.5 114.5T320-480q0 77 33 142t90 110q-28 14-59 21t-64 7" />
	</svg>
)
export default SvgJoinFill

import type { SVGProps } from "react"
const SvgKeyFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M280-351q54 0 91.5-37.5T409-480t-37.5-91.5T280-609t-91.5 37.5T151-480t37.5 91.5T280-351m0 111q-100 0-170-70T40-480t70-170 170-70q85 0 142.5 46.5T503-555h344l73 73-127 146-103-84-84 84-71-71h-32q-19 75-80.5 121T280-240" />
	</svg>
)
export default SvgKeyFill

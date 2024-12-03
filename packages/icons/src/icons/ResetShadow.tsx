import type { SVGProps } from "react"
const SvgResetShadow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M680-80q-83 0-141.5-58.5T480-280t58.5-141.5T680-480t141.5 58.5T880-280t-58.5 141.5T680-80m0-60q-23-29-35.5-64.5T632-280t12.5-75.5T679-420q-57 0-98 41t-41 99 41 99 99 41m155-400h-62q-23-102-104-171t-189-69q-125 0-212.5 87.5T180-480q0 81 38.5 147.5T320-226v-114h60v220H160v-60h121q-73-48-117-127t-44-173q0-75 28.5-140.5t77-114 114-77T480-840q134 0 233.5 86T835-540" />
	</svg>
)
export default SvgResetShadow

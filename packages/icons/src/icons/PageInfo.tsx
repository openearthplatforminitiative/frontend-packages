import * as React from "react"
import type { SVGProps } from "react"
const SvgPageInfo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M710-140q-63 0-106.5-43.5T560-290t43.5-106.5T710-440t106.5 43.5T860-290t-43.5 106.5T710-140m0-60q38 0 64-26t26-64-26-64-64-26-64 26-26 64 26 64 64 26m-590-60v-60h360v60zm130-260q-63 0-106.5-43.5T100-670t43.5-106.5T250-820t106.5 43.5T400-670t-43.5 106.5T250-520m0-60q38 0 64-26t26-64-26-64-64-26-64 26-26 64 26 64 64 26m230-60v-60h360v60zm-230-30" />
	</svg>
)
export default SvgPageInfo

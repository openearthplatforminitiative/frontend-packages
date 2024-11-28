import * as React from "react"
import type { SVGProps } from "react"
const SvgPaletteFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-84 32-157t87.5-127 130-85T489-880q79 0 150 26.5T763.5-780t85 111.5T880-527q0 108-63 170.5T650-294h-75q-18 0-31 14t-13 31q0 20 14.5 38t14.5 43q0 26-24.5 57T480-80M247-454q20 0 35-15t15-35-15-35-35-15-35 15-15 35 15 35 35 15m126-170q20 0 35-15t15-35-15-35-35-15-35 15-15 35 15 35 35 15m214 0q20 0 35-15t15-35-15-35-35-15-35 15-15 35 15 35 35 15m131 170q20 0 35-15t15-35-15-35-35-15-35 15-15 35 15 35 35 15" />
	</svg>
)
export default SvgPaletteFill

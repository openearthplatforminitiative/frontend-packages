import * as React from "react"
import type { SVGProps } from "react"
const SvgCrib = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M220-380h520v-160H420v-200H320q-42 0-71 29t-29 71zm260.25 240q22.75 0 45.25-3t44.5-10v-167H390v167q22 7 44.75 10t45.5 3M480-80q-80 0-153-30t-130-87l43-43q20 20 42.65 34.93Q305.29-190.14 330-177v-143H220q-24 0-42-18t-18-42v-260q0-66 47-113t113-47h160v200h260q24 0 42 18t18 42v160q0 24-18 42t-42 18H630v143q25-12 47-28.25T719-241l43 43q-57 56-129.68 87Q559.65-80 480-80m-60-460" />
	</svg>
)
export default SvgCrib

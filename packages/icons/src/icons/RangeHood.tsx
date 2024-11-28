import * as React from "react"
import type { SVGProps } from "react"
const SvgRangeHood = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-160q-24.75 0-42.37-17.63Q80-195.25 80-220v-188q0-16 6.5-30.5T104-464l176-176v-200h400v200l182 182q8 8 13 19.28t5 23.72v195q0 24.75-17.62 42.37Q844.75-160 820-160zm52-308h576L620-616v-164H340v164zm-52 248h680v-188H140zm260-74v-40h160v40z" />
	</svg>
)
export default SvgRangeHood
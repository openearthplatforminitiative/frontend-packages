import * as React from "react"
import type { SVGProps } from "react"
const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-450v-60h800v60zm210-120v-100h380v100zm0 280v-100h380v100z" />
	</svg>
)
export default SvgAlignCenter
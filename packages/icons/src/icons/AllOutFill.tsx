import * as React from "react"
import type { SVGProps } from "react"
const SvgAllOutFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-175h60v115h115v60zm545 0v-60h115v-115h60v175zm-185-60q-125 0-212.5-87.5T180-480t87.5-212.5T480-780t212.5 87.5T780-480t-87.5 212.5T480-180M120-665v-175h175v60H180v115zm660 0v-115H665v-60h175v175z" />
	</svg>
)
export default SvgAllOutFill
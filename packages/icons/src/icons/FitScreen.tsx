import * as React from "react"
import type { SVGProps } from "react"
const SvgFitScreen = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M820-610v-130H690v-60h130q24 0 42 18t18 42v130zm-740 0v-130q0-24 18-42t42-18h130v60H140v130zm610 450v-60h130v-130h60v130q0 24-18 42t-42 18zm-550 0q-24 0-42-18t-18-42v-130h60v130h130v60zm60-120v-400h560v400zm60-60h440v-280H260zm0 0v-280z" />
	</svg>
)
export default SvgFitScreen

import * as React from "react"
import type { SVGProps } from "react"
const SvgResize = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M780-615v-165H615v-60h225v225zM120-120v-225h60v165h165v60zm0-330v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60zm165 0v-60h60v60zm165 660v-60h60v60zm0-660v-60h60v60zm165 660v-60h60v60zm165 0v-60h60v60zm0-165v-60h60v60zm0-165v-60h60v60z" />
	</svg>
)
export default SvgResize

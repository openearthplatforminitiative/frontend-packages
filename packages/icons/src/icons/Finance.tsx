import type { SVGProps } from "react"
const SvgFinance = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-660h60v660h660v60zm75-135v-334h119v334zm198 0v-540h119v540zm194 0v-170h119v170z" />
	</svg>
)
export default SvgFinance

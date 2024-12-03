import type { SVGProps } from "react"
const SvgGridViewFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-510v-330h330v330zm0 390v-330h330v330zm390-390v-330h330v330zm0 390v-330h330v330z" />
	</svg>
)
export default SvgGridViewFill

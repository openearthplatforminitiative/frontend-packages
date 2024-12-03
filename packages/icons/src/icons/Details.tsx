import type { SVGProps } from "react"
const SvgDetails = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m80-120 400-720 400 720zm102-60h268v-482zm328 0h268L510-662z" />
	</svg>
)
export default SvgDetails

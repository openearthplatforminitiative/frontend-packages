import type { SVGProps } from "react"
const SvgAddFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60z" />
	</svg>
)
export default SvgAddFill

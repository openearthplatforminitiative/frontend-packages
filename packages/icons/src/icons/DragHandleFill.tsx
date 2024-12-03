import type { SVGProps } from "react"
const SvgDragHandleFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-390v-60h640v60zm0-120v-60h640v60z" />
	</svg>
)
export default SvgDragHandleFill

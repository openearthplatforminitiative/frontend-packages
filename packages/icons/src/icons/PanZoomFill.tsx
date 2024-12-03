import type { SVGProps } from "react"
const SvgPanZoomFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-230h60v127l148-148 43 43-148 148h127v60zm513-470-43-43 147-147H610v-60h230v230h-60v-127z" />
	</svg>
)
export default SvgPanZoomFill

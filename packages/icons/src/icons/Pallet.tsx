import type { SVGProps } from "react"
const SvgPallet = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-80v-80h800v80h-80v-40H520v40h-80v-40H160v40zm150-240q-12.75 0-21.37-8.63Q200-337.25 200-350v-500q0-12.75 8.63-21.38Q217.25-880 230-880h500q12.75 0 21.38 8.62Q760-862.75 760-850v510q0 8.5-5.75 14.25T740-320zm10-40h480v-480H240zm120-300h240v-40H360zM240-360v-480z" />
	</svg>
)
export default SvgPallet

import type { SVGProps } from "react"
const SvgCharger = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m462-182 170-360H502v-240L332-422h130zm18 102q-85 0-158-30.5T195-195t-84.5-127T80-480q0-84 30.5-157T195-764t127-85 158-31q84 0 157 31t127 85 85 127 31 157q0 85-31 158t-85 127-127 84.5T480-80m0-60q145 0 242.5-97.5T820-480t-97.5-242.5T480-820t-242.5 97.5T140-480t97.5 242.5T480-140" />
	</svg>
)
export default SvgCharger

import type { SVGProps } from "react"
const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-160v-520l160 120 200-280 200 160h160v520zm204-91 160-221 296 231v-379H659L492-754 294-475l-114-85v194z" />
	</svg>
)
export default SvgAreaChart

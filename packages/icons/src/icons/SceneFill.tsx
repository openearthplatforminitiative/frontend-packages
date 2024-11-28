import * as React from "react"
import type { SVGProps } from "react"
const SvgSceneFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M820-80v-610q0-38-26-64t-64-26h-50v62q0 7.71-5.14 12.86Q669.71-700 662-700H438q-10 0-14.5-11t-.5-19l76-164q5-12 16.4-19t26.6-7h92q19.71 0 32.86 15Q680-890 680-870v30h50q63 0 106.5 43.5T880-690v610zm-630 0q-46.75 0-78.37-31.63Q80-143.25 80-190v-98q0-25 17.5-42.5T140-348t42.5 17.5T200-288v88h380v-90q0-25 17.5-42.5T640-350t42.5 17.5T700-290v100q0 46.75-31.62 78.37Q636.75-80 590-80zm40-150v-60q0-32-16-56t-54-32v-102q0-24.75 17.63-42.38Q195.25-540 220-540h340q24.75 0 42.38 17.62Q620-504.75 620-480v102q-38 8-54 32t-16 56v60z" />
	</svg>
)
export default SvgSceneFill

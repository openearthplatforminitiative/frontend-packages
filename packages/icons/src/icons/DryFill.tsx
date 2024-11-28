import * as React from "react"
import type { SVGProps } from "react"
const SvgDryFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M230-80q-63 0-106.5-43.5T80-230v-216q0-28 13.5-53t36.5-40l324-209 20 20q15 15 17.5 35.5T483-654l-59 94h346q13 0 21.5 8.5T800-530q0 12-8.5 21t-21.5 9H480v80h370q13 0 21.5 8.5T880-390q0 12-8.5 21t-21.5 9H480v80h330q13 0 21.5 8.5T840-250q0 12-8.5 21t-21.5 9H480v80h250q13 0 21.5 8.5T760-110q0 12-8.5 21T730-80zm389-570q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 .5 66.5T643-791q24 32 32 64.5t1 76.5zm160 0q6-39-3-68t-38-67q-25-32-33-65t-1-80h56q-8 40 .5 66.5T803-791q24 32 32 64.5t1 76.5z" />
	</svg>
)
export default SvgDryFill

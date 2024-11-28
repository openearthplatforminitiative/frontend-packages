import * as React from "react"
import type { SVGProps } from "react"
const SvgCoffeeMaker = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M220-80q-23 0-41.5-18T160-140v-680q0-23 18.5-41.5T220-880h580v60H693v60q0 14-12.5 27T654-720H368q-14 0-26.5-13T329-760v-60H220v680h188q-38-26-58.5-63T329-293v-193h364v193q0 53-21 90t-59 63h187v60zm290.5-86q51.5 0 87-37.04T633-293v-133H389v133q0 52.92 35 89.96T510.5-166m-.5-394q16.58 0 27.79-11.21T549-599t-11.21-27.79T510-638t-27.79 11.21T471-599t11.21 27.79T510-560m1 134" />
	</svg>
)
export default SvgCoffeeMaker
import * as React from "react"
import type { SVGProps } from "react"
const SvgLabs = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-83 0-141.5-58.5T280-280v-360q-33 0-56.5-23.5T200-720v-80q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v80q0 33-23.5 56.5T680-640v360q0 83-58.5 141.5T480-80M260-700h440v-120H260zm219.76 560Q538-140 579-180.83q41-40.84 41-99.17v-20H480v-60h140v-100H480v-60h140v-120H340v360q0 58.33 40.76 99.17 40.77 40.83 99 40.83M260-700v-120z" />
	</svg>
)
export default SvgLabs

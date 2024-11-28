import * as React from "react"
import type { SVGProps } from "react"
const SvgNestProtect = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M315-120q-81 0-138-57t-57-138v-330q0-81.9 57-138.45T315-840h330q81.9 0 138.45 56.55T840-645v330q0 81-56.55 138T645-120zm0-60h330q57.38 0 96.19-38.81Q780-257.63 780-315v-330q0-57.38-38.81-96.19T645-780H315q-57.37 0-96.19 38.81Q180-702.38 180-645v330q0 57.37 38.81 96.19Q257.63-180 315-180m165-105q-81 0-138-57t-57-138.5 57-138T480.5-675t138 56.55T675-480q0 81-56.55 138T480-285m0-60q57.38 0 96.19-38.81Q615-422.63 615-480q0-57.38-38.81-96.19T480-615q-57.37 0-96.19 38.81Q345-537.38 345-480q0 57.37 38.81 96.19Q422.63-345 480-345" />
	</svg>
)
export default SvgNestProtect

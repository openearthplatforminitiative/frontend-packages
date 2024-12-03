import type { SVGProps } from "react"
const SvgRouteFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M355-120q-65 0-110-45.5T200-275v-349q-35-13-57.5-41.5T120-730q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 36-22.5 64.5T260-624v349q0 39 27.5 67t67.5 28q41 0 68-28t27-67v-410q0-65 45-110t110-45 110 45 45 110v349q35 13 57.5 41.5T840-230q0 45-32 77.5T730-120q-45 0-77.5-32.5T620-230q0-36 22.5-65t57.5-41v-349q0-40-27.5-67.5T605-780t-67.5 27.5T510-685v410q0 64-45 109.5T355-120" />
	</svg>
)
export default SvgRouteFill

import type { SVGProps } from "react"
const SvgDirectionsRailway = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-120v-40l60-40q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l60 40v40zm-20-425h520v-155H220zm440 60H220h520zM480.06-315Q503-315 519-331.06t16-39T518.94-409t-39-16T441-408.94t-16 39T441.06-331t39 16M300-255h360q34 0 57-25t23-60v-145H220v145q0 35 23 60t57 25m180-565q-120 0-173 15.5T231-760h501q-18-27-76.5-43.5T480-820m0 60h252-501z" />
	</svg>
)
export default SvgDirectionsRailway

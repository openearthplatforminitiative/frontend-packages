import * as React from "react"
import type { SVGProps } from "react"
const SvgDirectionsSubway = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M240-120v-40l60-40q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l60 40v40zm-20-425h234v-155H220zm440 60H220h520zm-146-60h226v-155H514zM335.06-315Q358-315 374-331.06t16-39T373.94-409t-39-16T296-408.94t-16 39T296.06-331t39 16m290 0Q648-315 664-331.06t16-39T663.94-409t-39-16T586-408.94t-16 39T586.06-331t39 16M300-255h360q34 0 57-25t23-60v-145H220v145q0 35 23 60t57 25m180-565q-120 0-173 15.5T231-760h501q-18-27-76.5-43.5T480-820m0 60h252-501z" />
	</svg>
)
export default SvgDirectionsSubway

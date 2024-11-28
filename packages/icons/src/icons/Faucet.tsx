import * as React from "react"
import type { SVGProps } from "react"
const SvgFaucet = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-370v-60h200v-70h-90q-12.75 0-21.37-8.68-8.63-8.67-8.63-21.5 0-12.82 8.63-21.32 8.62-8.5 21.37-8.5h90q24.75 0 42.38 17.62Q340-524.75 340-500v70h110v-296q0-64 45.5-109T605-880q44 0 80 22.5t56 61.5l42 84-55 27-41-83q-12-23-34.45-37.5T604.29-820q-39.29 0-66.79 27.42Q510-765.17 510-726v296h110v-70q0-24.75 17.63-42.38Q655.25-560 680-560h90q12.75 0 21.38 8.68 8.62 8.67 8.62 21.5 0 12.82-8.62 21.32-8.63 8.5-21.38 8.5h-90v70h200v60zm140 250q-24.75 0-42.37-17.63Q160-155.25 160-180v-190h60v190h520v-190h60v180q0 28.87-20.56 49.44Q758.88-120 730-120z" />
	</svg>
)
export default SvgFaucet
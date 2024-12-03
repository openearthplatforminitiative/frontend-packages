import type { SVGProps } from "react"
const SvgRiceBowl = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M320-80v-70q-105-42-172.5-130T80-480q0-83 31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480q0 112-67.5 200T640-150v70zm70-399h180v-329q-22.5-6-45-9t-45-3-45 3-45 9zm-250 0h190v-306q-88 43-139 125.5T140-479m490 0h190q0-98-51-180.5T630-785zM380-140h200v-51q79-34 143.5-90T811-419H149q23 82 87.5 138T380-191.23zm0 0h200z" />
	</svg>
)
export default SvgRiceBowl

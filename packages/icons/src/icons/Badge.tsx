import * as React from "react"
import type { SVGProps } from "react"
const SvgBadge = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-80q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h250v-140q0-24 18-42t42.41-18h59.18Q534-880 552-862t18 42v140h250q24 0 42 18t18 42v480q0 24-18 42t-42 18zm0-60h680v-480H570v30q0 28-18 44t-42.41 16h-59.18Q426-530 408-546t-18-44v-30H140zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265-312q-15 5-24 19t-9 32zm336-67h170v-50H568zm-214-50q22.5 0 38.25-15.75T408-418t-15.75-38.25T354-472t-38.25 15.75T300-418t15.75 38.25T354-364m214-63h170v-50H568zM450-590h60v-230h-60zm30 210" />
	</svg>
)
export default SvgBadge

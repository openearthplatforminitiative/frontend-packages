import * as React from "react"
import type { SVGProps } from "react"
const SvgMove = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M440-280q-7 0-12-4t-7-10q-14-42-34-70t-40-54-33.5-54-13.5-68q0-58 41-99t99-41 99 41 41 99q0 40-13.5 68T533-418t-40 54-34 70q-2 6-7 10t-12 4m0-112q9-14 18-26t17-23q23-30 34-50t11-49q0-33-23.5-56.5T440-620t-56.5 23.5T360-540q0 29 11 49t34 50q8 11 17 23t18 26m0-98q21 0 35.5-14.5T490-540t-14.5-35.5T440-590t-35.5 14.5T390-540t14.5 35.5T440-490m3 374q-152 0-258-106T79-480q0-76 28.5-142t78-115.5 115.5-78T443-844t142 28.5 115.5 78 78 115.5T807-480v18l70-70 42 42-142 142-142-142 42-42 70 70v-18q0-125-89.5-214.5T443-784t-214.5 89.5T139-480t89.5 214.5T443-176q57 0 110.5-21.5T647-256l43 43q-48 45-113 71t-134 26m-3-424" />
	</svg>
)
export default SvgMove

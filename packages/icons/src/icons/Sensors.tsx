import * as React from "react"
import type { SVGProps } from "react"
const SvgSensors = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M197-197q-54-54-85.5-126.5T80-480t31.5-156.5T197-763l43 43q-46 46-73 107.5T140-480t26.5 132T240-240zm113-113q-32-32-51-75.5T240-480t19-94.5 51-75.5l43 43q-24 24-38.5 56.5T300-480t14 70 39 57zm170-90q-33 0-56.5-23.5T400-480t23.5-56.5T480-560t56.5 23.5T560-480t-23.5 56.5T480-400m170 90-43-43q24-24 38.5-56.5T660-480t-14-70-39-57l43-43q32 32 51 75.5t19 94.5q0 50-19 93.5T650-310m113 113-43-43q46-46 73-107.5T820-480t-26.5-132T720-720l43-43q54 55 85.5 127.5T880-480t-31.5 155.5T763-197" />
	</svg>
)
export default SvgSensors

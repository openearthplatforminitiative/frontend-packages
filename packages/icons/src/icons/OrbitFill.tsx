import * as React from "react"
import type { SVGProps } from "react"
const SvgOrbitFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M233-100q-55.1 0-94.05-38.93t-38.95-94T138.93-327t94-39T327-327.05 366-233q0 22-7 42.5T339-153v-17q33 15 69 22.5t72 7.5q142.38 0 241.19-98.81Q820-337.63 820-480h60q0 83-31.5 156T763-197t-127 85.5T480-80q-46.37 0-90.69-10.5Q345-101 303-121q-16 10.5-33.5 15.75T233-100m247.07-247Q425-347 386-385.93t-39-94T385.93-574t94-39T574-574.07t39 94T574.07-386t-94 39M80-480q0-83 31.5-156T197-763t127-85.5T480-880q46.37 0 90.69 10.5Q615-859 657-839q16-10 33.5-15t36.5-5q54.69 0 93.34 38.72Q859-781.56 859-726.78T820.28-633t-93.5 39T633-632.95 594-727q0-22 7-42.5t20-37.5v17q-33-15-69-22.5t-72-7.5q-142.37 0-241.19 98.81Q140-622.38 140-480z" />
	</svg>
)
export default SvgOrbitFill

import * as React from "react"
import type { SVGProps } from "react"
const SvgDoorSensor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M340-360v-420 600zm-60 30h60v150h280v-600H340v390h-60v-390q0-24.75 17.63-42.38Q315.25-840 340-840h280q24.75 0 42.38 17.62Q680-804.75 680-780v600q0 24.75-17.62 42.37Q644.75-120 620-120H340q-24.75 0-42.37-17.63Q280-155.25 280-180zm200.5-240q12.5 0 21-9t8.5-21.5-8.62-21Q492.75-630 480-630q-12 0-21 8.62-9 8.63-9 21.38 0 12 9 21t21.5 9M810-610q-12 0-21-9t-9-21v-160q0-12.75 9-21.38 9-8.62 21.5-8.62t21 8.62q8.5 8.63 8.5 21.38v160q0 12-8.62 21-8.63 9-21.38 9M190-330q-12 0-21-9t-9-21.5 9-21 21-8.5h290q12.75 0 21.38 8.62Q510-372.75 510-360q0 12-8.62 21-8.63 9-21.38 9z" />
	</svg>
)
export default SvgDoorSensor
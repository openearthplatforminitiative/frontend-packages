import * as React from "react"
import type { SVGProps } from "react"
const SvgSunny = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-770v-150h60v150zm256 106-42-42 106-107 42 43zm64 214v-60h150v60zM450-40v-150h60v150zM253-665 148-770l42-42 106 106zm518 517L664-254l41-41 108 104zM40-450v-60h150v60zm151 302-43-42 105-105 22 20 22 21zm289-92q-100 0-170-70t-70-170 70-170 170-70 170 70 70 170-70 170-170 70m0-60q75 0 127.5-52.5T660-480t-52.5-127.5T480-660t-127.5 52.5T300-480t52.5 127.5T480-300m0-180" />
	</svg>
)
export default SvgSunny

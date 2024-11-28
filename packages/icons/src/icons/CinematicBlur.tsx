import * as React from "react"
import type { SVGProps } from "react"
const SvgCinematicBlur = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m140-840 74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152h112q24 0 42 18t18 42v600q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-600q0-24 18-42t42-18m0 212v448h680v-448zm0 0v448zm180 388h320v-32q0-42-42.5-65T480-360t-117.5 23-42.5 65zm160-180q30.52 0 52.26-21.74T554-494q0-30.53-21.74-52.26Q510.52-568 480-568t-52.26 21.74Q406-524.53 406-494q0 30.52 21.74 52.26T480-420" />
	</svg>
)
export default SvgCinematicBlur

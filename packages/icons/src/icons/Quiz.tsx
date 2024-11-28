import * as React from "react"
import type { SVGProps } from "react"
const SvgQuiz = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M543-340q16.6 0 28.8-12.2T584-381t-12.2-28.8T543-422t-28.8 12.2T502-381t12.2 28.8T543-340m-25-126h47q2-29 8.5-43t32.5-39q27-26 37.5-45.4Q654-612.79 654-639q0-45.88-31.5-74.94T540-743q-38 0-68 20.5T428-665l45 19q11-25 27.5-38t39.5-13q29.78 0 48.39 17T607-637q0 20-9 35t-32 32q-32 29-40 46.5t-8 57.5M260-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zm0-60h560v-560H260zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60zm120-740v560z" />
	</svg>
)
export default SvgQuiz

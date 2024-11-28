import * as React from "react"
import type { SVGProps } from "react"
const SvgYard = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-180q0-97-69.5-166.5T244-416q0 97 69.5 166.5T480-180m0-220q27 0 43.5-16.5T540-460v-8q8 7 18 9t19 2q27 0 43.5-16.5t16.5-43.07q0-20.43-9-33.43t-24-24q15-6 24-21.39 9-15.4 9-35.93 0-26.68-16.5-43.18T577-691q-9 0-19 2t-18 9v-8q0-27-16.5-43.5T480-748t-43.5 16.5T420-688v8q-8-7-18-9t-19-2q-27 0-43.5 16.5T323-631.43q0 20.43 8.5 33.93T356-574q-16 7-24.5 22t-8.5 35q0 27 16.5 43.5T383-457q9 0 19.5-2t17.5-9v8q0 27 16.5 43.5T480-400m-.2-96q-32.8 0-55.3-22.5T402-574q0-32.71 22.7-55.35Q447.41-652 480.2-652q32.8 0 55.3 22.65Q558-606.71 558-574q0 33-22.7 55.5-22.71 22.5-55.5 22.5m.2 316q97 0 166.5-69.5T716-416q-97 0-166.5 69.5T480-180M140-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h680q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h680v-680H140zm0 0v-680z" />
	</svg>
)
export default SvgYard
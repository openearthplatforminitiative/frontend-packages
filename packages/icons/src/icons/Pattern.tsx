import * as React from "react"
import type { SVGProps } from "react"
const SvgPattern = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M226-160q-27.23 0-46.61-19.34Q160-198.68 160-225.84t19.39-46.66Q198.77-292 226-292q5 0 9.5.5t9.5 2.5l172-172q-6-17-1.3-34.9 4.69-17.9 17.5-31Q446-540 464-544.5t35 1.5l171-171q-1-5-1.5-10t-.5-10q0-27.22 19.34-46.61t46.5-19.39 46.66 19.34 19.5 46.5-19.39 46.66T734-668q-7 0-21-2L543-500q5 18 1 36t-17.06 31.06Q513-419 495-415.5t-37-1.5L297-256h124q8-17 23.95-26.5t34.56-9.5q19.49 0 35.49 9.5t24 26.5h136q9.27-17.1 24.86-26.55Q715.46-292 734-292q27.22 0 46.61 19.34t19.39 46.5-19.39 46.66T734-160q-19.02 0-35.01-9.5T675-196H539q-8 17-23.99 26.5T480-160q-18.79 0-34.89-9.5Q429-179 421-196H285q-8 17-24.11 26.5-16.1 9.5-34.89 9.5m.16-254q-27.16 0-46.66-19.34t-19.5-46.5 19.34-46.66 46.5-19.5 46.66 19.34 19.5 46.5-19.34 46.66-46.5 19.5m0-254q-27.16 0-46.66-19.34t-19.5-46.5 19.34-46.66 46.5-19.5 46.66 19.34 19.5 46.5-19.34 46.66-46.5 19.5m254 0q-27.16 0-46.66-19.34t-19.5-46.5 19.34-46.66 46.5-19.5 46.66 19.34 19.5 46.5-19.34 46.66-46.5 19.5m254 254q-27.16 0-46.66-19.34t-19.5-46.5 19.34-46.66 46.5-19.5 46.66 19.34 19.5 46.5-19.34 46.66-46.5 19.5" />
	</svg>
)
export default SvgPattern

import * as React from "react"
import type { SVGProps } from "react"
const SvgCoPresent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M860-131v-649H100v320H40v-320q0-25 17.63-42.5Q75.25-840 100-840h760q24.75 0 42.38 17.62Q920-804.75 920-780v580q0 26-17 45.5T860-131M360-401q-66 0-108-42t-42-108 42-108 108-42 108 42 42 108-42 108-108 42m0-60q39 0 64.5-25.5T450-551t-25.5-64.5T360-641t-64.5 25.5T270-551t25.5 64.5T360-461M40-80v-94q0-38 19-65t49-41q67-30 128.5-45T360-340t123 15.5 127.92 44.69q31.3 14.13 50.19 40.97T680-174v94zm60-60h520v-34q0-16-9.5-30.5T587-226q-64-31-117-42.5T360-280t-111 11.5T132-226q-14 7-23 21.5t-9 30.5zm260 0" />
	</svg>
)
export default SvgCoPresent
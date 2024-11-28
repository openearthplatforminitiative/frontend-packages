import * as React from "react"
import type { SVGProps } from "react"
const SvgDonutSmall = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M521-878q143 14 243.03 114.21Q864.07-663.58 878-521H594q-8-26-27.5-44T521-591zm60 76v174q14 9 27 20.5t21 26.5h173q-25-80-83-138.5T581-802m-142-76v287q-35 14-56.5 45.19T361-477q0 36.08 21.5 65.04t56.5 42.05V-82Q286-96 183.5-209T81-477t102-270.5T439-878m-60 76q-109 30-173.5 121T141-477q0 111 66 199.5T379-157v-174q-37-25-57.5-63T301-477t20-85 58-66zm215 363h284q-14 143-114.21 243.03Q663.58-95.93 521-82v-288q26-8 45.5-25.5T594-439m35.17 60Q619-365 607.5-352T581-331v173q80-23 138-82t83-139zm-.17 0" />
	</svg>
)
export default SvgDonutSmall
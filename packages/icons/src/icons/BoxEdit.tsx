import * as React from "react"
import type { SVGProps } from "react"
const SvgBoxEdit = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M197-734h565l-36.41-46H233zm183 305 100-50 100 50v-245H380zM180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-529q0-9.88 3-19.06t9-16.94l52-71q8-11 20.94-17.5T232-840h495q14.12 0 27.06 6.5T775-816l53 71q6 7.76 9 16.94t3 19.06v168q-19 0-32.5 2t-27.5 7v-142H640v267l-51 50-109-55-160 80v-342H180v494h320v60zm460-554h140zm-460 0h409zm380 554v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5-13.41 20.5L683-120zm300-263-37-37zM620-180h38l121-122-18-19-19-18-122 121zm141-141-19-18 37 37z" />
	</svg>
)
export default SvgBoxEdit
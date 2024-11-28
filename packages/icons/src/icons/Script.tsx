import * as React from "react"
import type { SVGProps } from "react"
const SvgScript = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M332-254q11 0 18-6t8-15q2-17 4.5-32l4.5-27q2-10 3-22t5-28q26-5 51.5-8.5T476-399q26-3 50.5-4.5T574-407q5 20 8.5 40t9.5 40q8 23 17.5 39t23.5 27q9 7 19 9t18-1q11-4 12-12t-6-24q-9-20-15-36.5T651-356q-4-15-7-28l-6-26q6 0 13.5-.5T663-412q17-2 25-11t8-20q0-12-9.5-20t-26.5-8h-13.5q-9.5 0-19.5 1-2-19-4.5-37.5T617-545q-3-22-6.5-40t-7.5-35q-5-20-14.5-36.5T565-685q-12-11-26-16.5t-28-5.5q-23 0-41 8t-35 26q-10 11-21 25.5T390-613q-6-9-12.5-13t-15.5-4q-8 0-13 4.5t-5 11.5q0 28-3.5 54.5T331-506q-4 19-8.5 38t-9.5 38q-13 1-22 2.5t-14 4.5q-6 3-9 8.5t-3 13.5 2 12.5 7 7.5 13 4 20 0q0 16-2 31.5t-2 30.5q0 14 .5 24.5T306-274q3 11 9.5 15.5T332-254m60-195q9-34 19-62.5t22-53.5q12-26 28.5-53t45.5-27q17 0 28 17.5t17 52.5q4 24 5.5 53.5T562-468q-21 2-42 3.5t-43 3.5q-21 2-42 5t-43 7M140-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h680q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h680v-680H140zm0 0v-680z" />
	</svg>
)
export default SvgScript
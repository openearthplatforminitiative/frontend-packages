import * as React from "react"
import type { SVGProps } from "react"
const SvgCalendarClock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-630h600v-130H180zm0 0v-130zm0 550q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v307q-14.17-7.29-29.08-12.14Q796-470 780-473v-97H180v430h319q6 17 14 31.5T532-80zm551 40q-78.43 0-133.72-55.28Q542-150.57 542-229t55.28-133.72Q652.57-418 731-418t133.72 55.28Q920-307.43 920-229T864.72-95.28Q809.43-40 731-40m58.24-88L817-156l-75-75v-112h-39v126z" />
	</svg>
)
export default SvgCalendarClock
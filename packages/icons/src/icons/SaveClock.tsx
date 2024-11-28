import * as React from "react"
import type { SVGProps } from "react"
const SvgSaveClock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-180v-620 287-5zm0 60q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h503l157 157v210q-14.17-7.29-29.08-12.14Q796-510 780-513v-163L656-800H180v620h319q6 17 14 31.5t19 28.5zm304-125q-1-6-1-11.88V-269q0-44.88 15.5-86.44T543-431q-14-10-30.05-16T480-453q-43.33 0-73.67 30.33Q376-392.33 376-349q0 44 31.5 74t76.5 30M731-80q-78.43 0-133.72-55.28Q542-190.57 542-269t55.28-133.72Q652.57-458 731-458t133.72 55.28Q920-347.43 920-269t-55.28 133.72Q809.43-80 731-80m11-191v-112h-39v126l86.24 89L817-196zM233-584h358v-143H233z" />
	</svg>
)
export default SvgSaveClock

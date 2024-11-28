import * as React from "react"
import type { SVGProps } from "react"
const SvgBallot = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M453-565h228v-60H453zm0 230h228v-60H453zM348-543q21.45 0 36.73-15.28Q400-573.55 400-595t-15.27-36.72Q369.45-647 348-647t-36.73 15.28Q296-616.45 296-595t15.27 36.72Q326.55-543 348-543m0 230q21.45 0 36.73-15.27Q400-343.55 400-365t-15.27-36.73Q369.45-417 348-417t-36.73 15.27Q296-386.45 296-365t15.27 36.73Q326.55-313 348-313M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" />
	</svg>
)
export default SvgBallot

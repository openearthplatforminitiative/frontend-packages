import * as React from "react"
import type { SVGProps } from "react"
const SvgCastWarning = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M81-264q41.67 0 70.83 30.33Q181-203.33 181-160H81zm0-160q108.64 0 184.32 77.5T341-160h-60q0-84.66-58-144.33T81-364zm0-160q87 0 163.5 33.5t133.5 91 90 135T501-160h-60q0-75-28-141.5t-77-116-114.5-78T81-524zm740 424H601q0-15-1-30t-3-30h224v-278q17-7 31.5-15t28.5-19v312q0 24.75-17.62 42.37Q845.75-160 821-160M81-684v-56q0-24.75 17.63-42.38Q116.25-800 141-800h349q-5 14-7 29t-3 31H141v60q-15-2-30-3t-30-1m649 144q-78 0-134-55.4t-56-134T596-864t134-56 134 55.87q56 55.86 56 135.13 0 78.43-56 133.72Q808-540 730-540m-.5-76q9.5 0 16-6t6.5-16-6.6-16-15.4-6q-10 0-16 6t-6 16 6 16 15.5 6M712-701h35v-143h-35z" />
	</svg>
)
export default SvgCastWarning
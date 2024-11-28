import * as React from "react"
import type { SVGProps } from "react"
const SvgSpa = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-72-8-143.5-41.5t-128.5-93-92.5-147T80-564.98V-603h38q53 0 113 20.5T337-530q8-90 48-185.5T480-879q55 68 95 163.5T623-530q46-30 106-51.5T842-603h38v38.02Q880-449 844.5-361.5t-92.5 147-128.5 93T480-80m8-61q-11-186-107.39-282.18Q284.21-519.37 141-542q13 193 112.5 288T488-141m-9-245q14-26 38.5-56t47.5-50q5-68-20-138t-65-145q-40 75-65 145t-20 138q23 20 46.5 50t37.5 56m69 228q47-17 93.5-45t84-73 63-110.5T819-542q-106 17-187 75.5T513-322q12 38 21 76.5t14 87.5m-68 78" />
	</svg>
)
export default SvgSpa

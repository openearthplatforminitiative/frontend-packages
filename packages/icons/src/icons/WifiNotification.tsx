import * as React from "react"
import type { SVGProps } from "react"
const SvgWifiNotification = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80M160-200v-60h80v-304q0-84 49.5-150.5T420-798v-22q0-25 17.5-42.5T480-880t42.5 17.5T540-820v22q32 7 59.5 22t50.5 38q-18.91 4.15-37.45 9.07Q594-724 576-717q-22-14-45.87-20.5T480-744q-75 0-127.5 52.5T300-564v304h500v60zm350-344-43-42q44-44 102.5-69T694-680t124 25 102 69l-43 42q-35-35-82.5-55.5T693-620t-101 20.5-82 55.5m85 85-43-43q27-27 63-42.5t78-15.5 78.5 15.5T835-502l-43 43q-19-20-44-30.5T694-500t-54.5 11-44.5 30m99 99-57-56q11-11 25.5-17.5T694-440t31 6.5 25 17.5z" />
	</svg>
)
export default SvgWifiNotification
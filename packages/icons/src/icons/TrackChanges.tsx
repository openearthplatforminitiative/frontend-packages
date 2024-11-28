import * as React from "react"
import type { SVGProps } from "react"
const SvgTrackChanges = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880h30v326q22 9 36 29t14 45q0 33-23.5 56.5T480-400t-56.5-23.5T400-480q0-25 14-45t36-29v-104q-65 11-107.5 60.5T300-480q0 75 52.5 127.5T480-300t127.5-52.5T660-480q0-41-16-75t-44-59l43-43q35 33 56 78.5t21 98.5q0 100-70 170t-170 70-170-70-70-170q0-93 60-160.5T450-719v-100q-131 11-220.5 108T140-480q0 142 99 241t241 99 241-99 99-241q0-74-28.5-137T713-727l43-43q57 55 90.5 129.5T880-480q0 83-31.5 156T763-197t-127 85.5T480-80" />
	</svg>
)
export default SvgTrackChanges

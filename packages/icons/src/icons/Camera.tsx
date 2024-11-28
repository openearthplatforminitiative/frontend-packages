import * as React from "react"
import type { SVGProps } from "react"
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M454-602h345q-28-74-89-130.5T571-810zm-93 83 174-299q-12-1-27-1.5t-28-.5q-72 0-132 26t-108 72zM150-393h237L217-696q-38 45-57.5 100.5T140-480q0 21 2 44t8 43m240 242 120-207H162q28 74 88.5 130.5T390-151m90 11q72 0 132.5-26T720-238L600-441 425-142q13 1 27.5 1.5t27.5.5m264-124q34-42 55-99t21-117q0-22-2-44.5t-7-43.5H574zM480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-155.5t86-127 127.5-86T480-880q83 0 155.5 31.5t127 86 86 127T880-480q0 82-31.5 155t-86 127.5-127 86T480-80" />
	</svg>
)
export default SvgCamera

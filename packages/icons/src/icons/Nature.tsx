import * as React from "react"
import type { SVGProps } from "react"
const SvgNature = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M230-80v-60h220v-180h-90q-83 0-141.5-58.5T160-520q0-60 33-110.5t89-73.5q9-75 65.5-125.5T480-880t132.5 50.5T678-704q56 23 89 73.5T800-520q0 83-58.5 141.5T600-320h-90v180h230v60zm130-300h240q58.33 0 99.17-40.83Q740-461.67 740-520q0-42-24-76.5T654-648l-32-14-4-35q-7-53-46.18-88-39.19-35-91.82-35t-91.82 35Q349-750 342-697l-4 35-32 14q-38 17-62 51.73-24 34.72-24 76.39Q220-462 260.83-421q40.84 41 99.17 41m120-220" />
	</svg>
)
export default SvgNature

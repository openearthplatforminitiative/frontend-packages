import * as React from "react"
import type { SVGProps } from "react"
const SvgAccessible = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M482.08-734q-30.08 0-51.58-21.42t-21.5-51.5 21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5M696-80v-209H482q-29.7 0-50.85-21.15T410-361v-247q0-29.7 21-50.85T482.49-680q22.17 0 38.34 9T559-636q42 49 92 82t109 35v60q-51 0-105-25t-104-67v183h133q29.7 0 50.85 21.15T756-296v216zm-300 0q-83 0-139.5-56.5T200-276q0-68 49.5-125.5T380-468v61q-54 5-86.5 44.5T261-276q0 58 38.5 97t96.5 39q47 0 87-32.5t44-86.5h61q-8 80-66 129.5T396-80" />
	</svg>
)
export default SvgAccessible

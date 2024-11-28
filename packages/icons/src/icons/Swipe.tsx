import * as React from "react"
import type { SVGProps } from "react"
const SvgSwipe = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M470-80q-21.88 0-41.94-8T392-112L184-320l15-22q11-16 28.5-22.5T264-366l96 26v-340q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v420l-124-33 139.18 139.18Q442-147 451.13-143.5T470-140h170q42 0 71-29t29-71v-180q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v180q0 66-47 113T640-80zm17-290v-170q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v170zm126 0v-130q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v130zm267-330H700v-40h133q-75-65-164.5-102.5T480-880t-188.5 37.5T127-740h133v40H80v-180h40v93q78-62 169-97.5T480-920t191 35.5T840-787v-93h40z" />
	</svg>
)
export default SvgSwipe

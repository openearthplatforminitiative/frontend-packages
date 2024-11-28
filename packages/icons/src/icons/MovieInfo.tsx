import * as React from "react"
import type { SVGProps } from "react"
const SvgMovieInfo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-120q-24 0-42-18t-18-42v-599q0-24 18-42.5t42-18.5h681q24.34 0 41.67 18.5T880-779v599q0 24-17.33 42T821-120zm0-60h105v-105H140zm576 0h105v-105H716zM450-294h60v-233h-60zm-310-50h105v-105H140zm576 0h105v-105H716zM140-509h105v-105H140zm576 0h105v-105H716zM480.18-613q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5M140-674h105v-105H140zm576 0h105v-105H716zM305-180h352v-599H305zm0-599h352z" />
	</svg>
)
export default SvgMovieInfo
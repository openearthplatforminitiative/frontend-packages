import * as React from "react"
import type { SVGProps } from "react"
const SvgKeepPublic = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m360-40-30-30v-241H120v-60l80-77v-332h-50v-60h343q-15.32 12.82-27.66 27.91T442-780H260v354l-59 55h399v60H390v241zm293-612q27.92 0 47.46-19.56t19.54-47.5T700.46-766 653-785q-27.5 0-46.75 19.35-19.25 19.36-19.25 47 0 27.65 19.25 47.15T653-652m0 133q33 0 62-15.5t47-42.5q-26-14-52.92-22.5-26.93-8.5-56-8.5-29.08 0-56.08 8.5T544-577q18 27 47 42.5t62 15.5m.01 55Q575-464 520-518.7T465-651q0-78.43 54.99-133.72 54.98-55.28 133-55.28Q731-840 786-784.72q55 55.29 55 133.72 0 77.6-54.99 132.3-54.98 54.7-133 54.7" />
	</svg>
)
export default SvgKeepPublic

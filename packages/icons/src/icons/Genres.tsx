import * as React from "react"
import type { SVGProps } from "react"
const SvgGenres = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M398.12-232Q449-232 484-267.58q35-35.59 35-86.42v-315h122v-60H474v275q-17-11-36.5-16.5T398-476q-50.83 0-86.42 35.62Q276-404.76 276-353.88t35.62 86.38 86.5 35.5m82.15 152q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34T80-480.5t31.5-155.66 86-126.84 127.34-85.5T480.5-880t155.66 31.5T763-763t85.5 127T880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80m.23-60Q622-140 721-239.5t99-241T721.19-721 480-820q-141 0-240.5 98.81T140-480q0 141 99.5 240.5t241 99.5m-.5-340" />
	</svg>
)
export default SvgGenres
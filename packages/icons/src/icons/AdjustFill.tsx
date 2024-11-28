import * as React from "react"
import type { SVGProps } from "react"
const SvgAdjustFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480.24-380Q522-380 551-409.24q29-29.23 29-71Q580-522 550.76-551q-29.23-29-71-29Q438-580 409-550.76q-29 29.23-29 71Q380-438 409.24-409q29.23 29 71 29m.03 300q-82.74 0-155.5-31.5Q252-143 197.5-197.5t-86-127.34T80-480.5t31.5-155.66 86-126.84 127.34-85.5T480.5-880t155.66 31.5T763-763t85.5 127T880-480.27q0 82.74-31.5 155.5Q817-252 763-197.68q-54 54.31-127 86Q563-80 480.27-80" />
	</svg>
)
export default SvgAdjustFill
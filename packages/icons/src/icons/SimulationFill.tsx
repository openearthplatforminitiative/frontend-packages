import * as React from "react"
import type { SVGProps } from "react"
const SvgSimulationFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M320-280v-23q0-44 44-70.5T480-400t116 26.5 44 70.5v23zm160-160q-33 0-56.5-23.5T400-520t23.5-56.5T480-600t56.5 23.5T560-520t-23.5 56.5T480-440M264-133q-111-16-167.5-48T40-261v-424q0-57 111.5-86T480-800t328.5 29T920-685v424q0 48-56.5 80T696-133v-486q63-11 106.5-26t69.5-35q-49-31-145-46t-247-15q-147 0-243 14.5T86-680q23 20 66 35t112 26z" />
	</svg>
)
export default SvgSimulationFill

import * as React from "react"
import type { SVGProps } from "react"
const SvgCameraVideo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M358-180h244l-25-100H383zm2-160h240q91.3 0 155.65-64.29T820-559.79 755.65-715.5 600-780H360q-91.3 0-155.65 64.29T140-560.21t64.35 155.71T360-340m120-120q-42 0-71-29t-29-71 29-71 71-29 71 29 29 71-29 71-71 29M257-613q12 0 21-9t9-21.5-9-21-21.5-8.5-21 8.62Q227-655.75 227-643q0 12 8.63 21 8.62 9 21.37 9m-97 493v-60h137l26-102q-103-14-173-92.5T80-560q0-117 81.5-198.5T360-840h240q117 0 198.5 81.5T880-560q0 107-70 185.5T637-282l26 102h137v60zm320-280q66 0 113-47t47-113-47-113-113-47-113 47-47 113 47 113 113 47M358-180h244z" />
	</svg>
)
export default SvgCameraVideo

import * as React from "react"
import type { SVGProps } from "react"
const SvgMouseLock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-118 0-199-81t-81-199v-260q0-118 81-199t199-81 199 81 81 199v167q-15-4-30-5t-30 1v-103H260v200q0 91.3 64.35 155.65T480-140q16 0 31.5-2t29.5-7v63q-15 3-30 4.5T480-80M260-620h190v-218q-84 11-137 74t-53 144m250 0h190q0-81-53-144t-137-74zM635-80q-15 0-28.5-13.5T593-122v-122q0-15 13.5-28.5T635-286v-40q0-36 23.5-61t58.5-25 58 25 23 61v40h1q14 0 27.5 13.5T840-244v122q0 15-13.5 28.5T799-80zm40-206h84v-40q0-19.55-11.5-32.77Q736-372 716.5-372T686-358.77q-11 13.22-11 32.77zM450-620" />
	</svg>
)
export default SvgMouseLock
import * as React from "react"
import type { SVGProps } from "react"
const SvgDiagnosis = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M320-210h320v-60H320zm0-120h320v-60H320zm160-154q64-58 107-98t43-90q0-31.91-23.05-54.95Q583.91-750 552-750q-25 0-41 9.5T480-712q-15-19-31-28.5t-41-9.5q-31.91 0-54.95 23.05Q330-703.91 330-672q0 50 41.5 88.5T480-484M740-80H220q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18m-520-60h520v-680H220zm0 0v-680z" />
	</svg>
)
export default SvgDiagnosis

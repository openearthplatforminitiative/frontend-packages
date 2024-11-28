import * as React from "react"
import type { SVGProps } from "react"
const SvgCandleFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M479-640q-46 0-77.5-32.5T370-751q0-54 34.5-94t75.5-75q37 38 73.5 77t36.5 92q0 46-32.5 78.5T479-640m339 360q17 0 29.5-12.5T860-322t-12.5-29-29.5-12-29.5 12-12.5 29 12.5 29.5T818-280M720-80H240q-50 0-85-35t-35-86v-79h239v-260q0-25 17.5-42.5T419-600h121q25 0 42.5 17.5T600-540v260h125q-5-10-7-20.5t-2-21.5q0-42 30-71.5t72-29.5 72 29.5 30 71.5q0 37-22.5 64.5T840-222v22q0 50-35 85t-85 35" />
	</svg>
)
export default SvgCandleFill

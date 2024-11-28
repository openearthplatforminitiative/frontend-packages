import * as React from "react"
import type { SVGProps } from "react"
const SvgTableEye = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v372q-14.25-9.17-29.25-16.67T780-438v-182H510v187q-27 11-51.5 27T412-370H180v190h162q10 17 20.5 31.5T384-120zm0-310h270v-190H180zm0-250h600v-100H180zM650.75-60Q563-60 490-105T382-230q35-80 108-125t161-45 161 45 108 125.5q-33 80.5-107.25 125t-162 44.5m.25-60q62 0 115-29.5t87-80.5q-34-51-87-80.5T651-340t-115 29.5-87 80.5q34 51 87 80.5T651-120m-.12-60q-20.88 0-35.38-14.62t-14.5-35.5 14.62-35.38 35.5-14.5 35.38 14.62 14.5 35.5-14.62 35.38-35.5 14.5" />
	</svg>
)
export default SvgTableEye

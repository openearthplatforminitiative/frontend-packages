import * as React from "react"
import type { SVGProps } from "react"
const SvgEcg = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-570v-170q0-24 18-42t42-18h680q24 0 42 18t18 42v260h-60v-260H140v170zm60 410q-24 0-42-18t-18-42v-170h60v170h299v60zM720-60l-81-69q-72-62-95.5-93.5T520-290q0-45 32-77.5t78-32.5q26 0 49.5 12t40.5 35q16-23 39.5-35t50.5-12q45 0 77.5 32.5T920-290q0 36-24.5 68.5T793-123zm0-79 32-28q66-56 87-79.5t21-43.5-15-35-35-15q-12.19 0-22.1 5-9.9 5-20.9 16l-47 44-48-44q-11-11-21.08-16-10.07-5-20.92-5-21 0-35.5 15T580-290t27.5 51 78.5 72zM279.94-290q-8.94 0-15.94-4t-12-12l-71-144H80v-60h120q8.17 0 15.23 4.64 7.06 4.63 10.77 12.36l54 106 133-266q4-8 11.38-11.5t15.5-3.5 15.62 3.5T467-653l71 143h132v60H520q-9 0-16.12-4-7.13-4-10.88-12l-54-106-133 266q-3.72 8-10.8 12-7.07 4-15.26 4M720-240" />
	</svg>
)
export default SvgEcg
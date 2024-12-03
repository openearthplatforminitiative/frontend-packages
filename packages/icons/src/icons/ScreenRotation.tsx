import type { SVGProps } from "react"
const SvgScreenRotation = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M516-191 191-516q-18-20-18-46t18-46l166-165q18-20 44.99-20T449-773l325 325q19 19 19 46t-19 46L608-191q-18 20-44.99 20T516-191m46-39 172-172-331-332-172 172zM478 1q-98.51 0-185.58-37.5t-152.24-103Q75-205 37.5-292.18T0-478h60q0 80 28.5 151.5t78.5 127T285.5-109 433-66L303-196l43-43L574-11q-23 7-47.48 9.5T478 1m422-479q0-80-28-151.5T794.5-757 677-848.5 530-892l128 128-43 43-228-228q23-6 45.5-8.5T478-960q100 0 187.5 38t153 103.5 103.5 153T960-478zm-417-4" />
	</svg>
)
export default SvgScreenRotation

import type { SVGProps } from "react"
const SvgPianoFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-23 18-41.5t42-18.5h600q23 0 41.5 18.5T840-780v600q0 24-18.5 42T780-120zm0-60h157v-210h-20q-12.75 0-21.37-8.63Q287-407.25 287-420v-360H180zm443 0h157v-600H673v360q0 12.75-8.62 21.37Q655.75-390 643-390h-20zm-246 0h206v-210h-20q-12.75 0-21.37-8.63Q533-407.25 533-420v-360H427v360q0 12.75-8.62 21.37Q409.75-390 397-390h-20z" />
	</svg>
)
export default SvgPianoFill

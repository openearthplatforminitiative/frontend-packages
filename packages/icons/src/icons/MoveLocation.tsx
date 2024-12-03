import type { SVGProps } from "react"
const SvgMoveLocation = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m751-120-42-42 73-74H577v-60h205l-73-74 42-42 146 146zM400-370q51.4 0 92.7-24t66.3-64q-34-26-74.22-39-40.21-13-85-13Q355-510 315-497t-74 39q25 40 66.3 64t92.7 24m.09-200q28.91 0 49.41-20.59t20.5-49.5-20.59-49.41-49.5-20.5-49.41 20.59-20.5 49.5 20.59 49.41 49.5 20.5M400-80Q239-217 159.5-334.5T80-552q0-150 96.5-239T400-880t223.5 89T720-552q0 16-1.33 32.38-1.34 16.38-6.67 33.62h-63q5-17 8-33.63 3-16.62 3-32.37 0-117.79-75.29-192.9Q509.42-820 400-820t-184.71 75.1Q140-669.79 140-552q0 75 65 173.5T400-159q23-20 42.5-40t38.5-39l6.92 6.46q6.93 6.46 15 14Q511-210 518-203.5l7 6.5q-28 29-58.82 58.03T400-80" />
	</svg>
)
export default SvgMoveLocation

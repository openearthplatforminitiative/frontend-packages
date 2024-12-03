import type { SVGProps } from "react"
const SvgBatteryError = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M310-80q-12.75 0-21.37-8.63Q280-97.25 280-110v-676q0-12.75 8.63-21.38Q297.25-816 310-816h90v-64h160v64h90q12.75 0 21.38 8.62Q680-798.75 680-786v381q-17 6-31.5 14.5T620-371v-385H340v616h213q5 17 12.5 31.5T584-80zm360 0-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83z" />
	</svg>
)
export default SvgBatteryError

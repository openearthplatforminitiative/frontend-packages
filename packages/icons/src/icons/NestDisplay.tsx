import type { SVGProps } from "react"
const SvgNestDisplay = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-200q-99 0-169.5-13.5T240-246v-34h-95q-26.14 0-44.07-19.5T85-345l31-360q2-23 18.81-39T175-760h610q23.38 0 40.19 16T844-705l31 360q2 26-15.93 45.5T815-280h-95v34q0 19-70.5 32.5T480-200M145-340h670l-30-360H175zm335-180" />
	</svg>
)
export default SvgNestDisplay

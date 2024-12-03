import type { SVGProps } from "react"
const SvgVibration = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M0-365v-230h60v230zm120 88v-406h60v406zm780-88v-230h60v230zm-120 88v-406h60v406zM300-120q-24.75 0-42.37-17.63Q240-155.25 240-180v-600q0-24.75 17.63-42.38Q275.25-840 300-840h360q24.75 0 42.38 17.62Q720-804.75 720-780v600q0 24.75-17.62 42.37Q684.75-120 660-120zm0-60h360v-600H300zm0 0v-600z" />
	</svg>
)
export default SvgVibration

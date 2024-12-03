import type { SVGProps } from "react"
const SvgTraffic = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-234q24 0 41-17t17-41-17-41-41-17-41 17-17 41 17 41 41 17m0-188q24 0 41-17t17-41-17-41-41-17-41 17-17 41 17 41 41 17m0-188q24 0 41-17t17-41-17-41-41-17-41 17-17 41 17 41 41 17M275-347v-80q-51-11-83-47.5T160-554h115v-77q-51-11-83-47t-32-79h115v-24q0-26 17-42.5t43-16.5h290q26 0 43 16.5t17 42.5v24h115q0 43-32 79t-83 47v77h115q0 43-32 79.5T685-427v80h115q0 45-32 80t-83 46v41q0 26-17 43t-43 17H335q-26 0-43-17t-17-43v-41q-51-11-83-46t-32-80zm60 167h290v-600H335zm0 0v-600z" />
	</svg>
)
export default SvgTraffic

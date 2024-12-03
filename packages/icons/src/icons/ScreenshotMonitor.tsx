import type { SVGProps } from "react"
const SvgScreenshotMonitor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M600-320h160v-160h-40v120H600zM200-560h40v-120h120v-40H200zm130 440v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80zM140-260h680v-520H140zm0 0v-520z" />
	</svg>
)
export default SvgScreenshotMonitor

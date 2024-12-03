import type { SVGProps } from "react"
const SvgDifference = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M490-526h60v-84h84v-60h-84v-84h-60v84h-84v60h84zm-84 156h228v-60H406zM260-160q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18zm0-60h520v-442L578-860H260zM140-40q-24 0-42-18t-18-42v-619h60v619h498v60zm120-180v-640z" />
	</svg>
)
export default SvgDifference

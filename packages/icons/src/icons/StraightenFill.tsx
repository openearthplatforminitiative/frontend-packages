import type { SVGProps } from "react"
const SvgStraightenFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-240q-24 0-42-18t-18-42v-360q0-23 18-41.5t42-18.5h130v240h60v-240h120v240h60v-240h120v240h60v-240h130q24 0 42 18.5t18 41.5v360q0 24-18 42t-42 18z" />
	</svg>
)
export default SvgStraightenFill

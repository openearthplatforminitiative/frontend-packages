import type { SVGProps } from "react"
const SvgTapAndPlay = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-495v-365q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24.75-17.62 42.37Q724.75-40 700-40v-730H260v275zm0 455v-155q65 0 110 45t45 110zm215 0q0-90-62.5-152.5T200-255v-60q114.58 0 194.79 80.21T475-40zm120 0q0-140-97.36-237.5T200-375v-60q82 0 154.08 31.11 72.08 31.1 125.4 84.43 53.31 53.32 84.42 125.41Q595-121.96 595-40zM260-830h440v-30H260zm0 0v-30z" />
	</svg>
)
export default SvgTapAndPlay

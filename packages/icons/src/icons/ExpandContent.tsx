import type { SVGProps } from "react"
const SvgExpandContent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-200v-240h60v180h180v60zm500-320v-180H520v-60h240v240z" />
	</svg>
)
export default SvgExpandContent

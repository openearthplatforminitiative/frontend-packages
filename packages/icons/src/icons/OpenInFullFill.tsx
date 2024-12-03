import type { SVGProps } from "react"
const SvgOpenInFullFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-300h60v198l558-558H540v-60h300v300h-60v-198L222-180h198v60z" />
	</svg>
)
export default SvgOpenInFullFill

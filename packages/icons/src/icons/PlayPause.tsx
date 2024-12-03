import type { SVGProps } from "react"
const SvgPlayPause = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-332v-296l220 148zm340 12v-320h60v320zm160 0v-320h60v320z" />
	</svg>
)
export default SvgPlayPause

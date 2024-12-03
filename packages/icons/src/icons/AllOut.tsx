import type { SVGProps } from "react"
const SvgAllOut = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-175h60v115h115v60zm545 0v-60h115v-115h60v175zm-185-60q-125 0-212.5-87.5T180-480t87.5-212.5T480-780t212.5 87.5T780-480t-87.5 212.5T480-180m0-60q99.6 0 169.8-70.2T720-480t-70.2-169.8T480-720t-169.8 70.2T240-480t70.2 169.8T480-240M120-665v-175h175v60H180v115zm660 0v-115H665v-60h175v175zM480-480" />
	</svg>
)
export default SvgAllOut

import type { SVGProps } from "react"
const SvgMeetingRoom = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-60h92v-660h390v45h147v615h91v60H689v-615h-87v615zm152-660v600zm179 340q17 0 28.5-11.5T491-480t-11.5-28.5T451-520t-28.5 11.5T411-480t11.5 28.5T451-440M272-180h270v-600H272z" />
	</svg>
)
export default SvgMeetingRoom

import type { SVGProps } from "react"
const SvgBlenderFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M300-80q-24 0-42-18t-18-42v-56q0-45 22.5-82t65.5-65l-33-190H180q-24 0-42-18t-18-42v-187q0-25 17.5-42.5T180-840h212v-40h166v40h161l-87 497q43 28 65.5 65t22.5 82v56q0 24-18 42t-42 18zm-16-513-32-187h-72v187zm196 393q17 0 28.5-11.5T520-240t-11.5-28.5T480-280t-28.5 11.5T440-240t11.5 28.5T480-200m-98-180h196l70-400H312z" />
	</svg>
)
export default SvgBlenderFill

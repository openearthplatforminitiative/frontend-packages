import type { SVGProps } from "react"
const SvgArrowsOutput = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-230h60v127l148-148 43 43-148 148h127v60zm490 0v-60h127L590-327l43-43 147 147v-127h60v230zM327-590 180-737v127h-60v-230h230v60H223l147 147zm306 0-43-43 147-147H610v-60h230v230h-60v-127zM481-413q-28.05 0-48.02-19.68Q413-452.36 413-480t19.98-47.32Q452.95-547 481-547q27.23 0 46.61 19.68Q547-507.64 547-480t-19.39 47.32Q508.23-413 481-413" />
	</svg>
)
export default SvgArrowsOutput

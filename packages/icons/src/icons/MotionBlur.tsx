import type { SVGProps } from "react"
const SvgMotionBlur = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M270-280v-60h267q-21-21-36-51t-19-59H350v-60h132q4-28 18.5-57.5T537-620H120v-60h560q83 0 141.5 58.5T880-480t-58.5 141.5T680-280zm409.76-60Q738-340 779-380.76q41-40.77 41-99Q820-538 779.24-579q-40.77-41-99-41Q622-620 581-579.24q-41 40.77-41 99Q540-422 580.76-381q40.77 41 99 41M80-450v-60h240v60zm40 170v-60h120v60z" />
	</svg>
)
export default SvgMotionBlur

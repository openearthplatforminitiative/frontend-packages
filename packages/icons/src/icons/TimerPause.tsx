import type { SVGProps } from "react"
const SvgTimerPause = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M360-860v-60h240v60zM480-81q-74 0-139.5-28.5T226-187t-77.5-114.5T120-441t28.5-139.5T226-695t114.5-77.5T480-801q67 0 126 22.5T711-716l51-51 42 42-51 51q36 40 61.5 97T840-441q0 74-28.5 139.5T734-187t-114.5 77.5T480-81m0-60q125 0 212.5-87.5T780-441t-87.5-212.5T480-741t-212.5 87.5T180-441t87.5 212.5T480-141M370-281h60v-320h-60zm160 0h60v-320h-60z" />
	</svg>
)
export default SvgTimerPause

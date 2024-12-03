import type { SVGProps } from "react"
const SvgTimer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M360-860v-60h240v60zm90 447h60v-230h-60zm30 332q-74 0-139.5-28.5T226-187t-77.5-114.5T120-441t28.5-139.5T226-695t114.5-77.5T480-801q67 0 126 22.5T711-716l51-51 42 42-51 51q36 40 61.5 97T840-441q0 74-28.5 139.5T734-187t-114.5 77.5T480-81m0-60q125 0 212.5-87.5T780-441t-87.5-212.5T480-741t-212.5 87.5T180-441t87.5 212.5T480-141m0-299" />
	</svg>
)
export default SvgTimer

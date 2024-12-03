import type { SVGProps } from "react"
const SvgFlagCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-120v-680h284q-5 14-7.5 29.5T472-740H260v251h316l19 85h145v-63q15-1 30.5-3.5T800-478v134H544l-18.93-85H260v309zm498-516 141-142-28-28-113 114-59-60-28 29zm27-279q80.51 0 137.26 56.74Q919-801.51 919-721t-56.74 137.26Q805.51-527 725-527t-137.26-56.74Q531-640.49 531-721t56.74-137.26Q644.49-915 725-915" />
	</svg>
)
export default SvgFlagCheck

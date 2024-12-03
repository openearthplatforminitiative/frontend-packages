import type { SVGProps } from "react"
const SvgDetectorStatus = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M438-120 310-248l43-42 85 85 169-170 43 43zM180-780v60h600v-60zm121 120 18 60h322l18-60zm18 120q-19.5 0-35.25-11.63Q268-563.25 262-582l-25-78h-57q-24.75 0-42.37-17.63Q120-695.25 120-720v-120h720v120q0 25-17.62 42.5Q804.75-660 780-660h-57l-30 81q-6.93 17.25-22.34 28.12Q655.26-540 636-540zM180-780v60z" />
	</svg>
)
export default SvgDetectorStatus

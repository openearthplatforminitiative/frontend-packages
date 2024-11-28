import * as React from "react"
import type { SVGProps } from "react"
const SvgDetector = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-120q-88 0-168.5-33T169-249l43-43q53.6 53.89 122.96 82.94Q404.33-180 480-180q76.25 0 145.62-28.54Q694.99-237.09 749-291l42 42q-63 62-143 95.5T480-120m0-160q-56.35 0-107.68-21Q321-322 282-363l42-41q31 32 71.32 48 40.31 16 84.5 16 44.18 0 84.68-16t71.5-48l42 42q-39 40-90.32 61-51.33 21-107.68 21M180-780v60h600v-60zm121 120 18 60h322l18-60zm18 120q-19.5 0-35.25-11.63Q268-563.25 262-582l-25-78h-57q-24.75 0-42.37-17.63Q120-695.25 120-720v-120h720v120q0 25-17.62 42.5Q804.75-660 780-660h-57l-30 81q-6.93 17.25-22.34 28.12Q655.26-540 636-540zM180-780v60z" />
	</svg>
)
export default SvgDetector

import * as React from "react"
import type { SVGProps } from "react"
const SvgParagliding = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-287q-30 0-51.5-21.5T407-360t21.5-51.5T480-433t51.5 21.5T553-360t-21.5 51.5T480-287M370 0v-145q-82-28-119.5-96T210-390h60q2 103 55 151.5T480-190t155-48.5T690-390h60q-2 81-40 149t-120 96V0zM210-450l-93-185q-11 5-23 10t-24 5-21-8-9-22v-150q0-66 131-113t309-47 309 47 131 113v150q0 14-9 22t-21 8-24-5-23-10l-93 185h-60l-62-250q-37-5-74-7.5t-74-2.5-74 2.5-74 7.5l-62 250zm28-53 40-189q-35 8-60.5 16T163-656zm484 0 75-153q-29-12-54.5-20T682-692zM100-695q77-32 177-53.5T480-770t203 21.5T860-695v-105q-6-11-34-28t-76.5-33T633-888.5 480-900t-153 11.5T210.5-861 134-828t-34 28zm380-205" />
	</svg>
)
export default SvgParagliding

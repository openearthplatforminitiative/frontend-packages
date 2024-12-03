import type { SVGProps } from "react"
const SvgSafetyCheck = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-288q79 0 136-57t57-136-57-136-136-57-136 57-57 136 57 136 136 57m74-92-99-91v-136h42v124l84 76zM480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v238q0 152-90 279.5T480-81m0-62q115-38 187.5-143.5T740-523v-196l-260-98-260 98v196q0 131 72.5 236.5T480-143m0-337" />
	</svg>
)
export default SvgSafetyCheck

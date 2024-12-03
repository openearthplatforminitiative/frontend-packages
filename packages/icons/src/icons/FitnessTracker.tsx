import type { SVGProps } from "react"
const SvgFitnessTracker = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m362-80-43-139q-18-12-28.5-31.5T280-293v-374q0-23 11-43t29-32l42-138h236l42 138q18 12 29 32t11 43v374q0 23-10.5 42.5T641-219L598-80zm44-60h147l20-63H386zm-36-123h220q13 0 21.5-8.5T620-293v-374q0-13-8.5-21.5T590-697H370q-13 0-21.5 8.5T340-667v374q0 13 8.5 21.5T370-263m17-494h185l-19-63H406zm92 0" />
	</svg>
)
export default SvgFitnessTracker

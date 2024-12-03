import type { SVGProps } from "react"
const SvgNoCrashFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-726 374-831l42-43 64 64 150-150 42 42zM150 0q-12.75 0-21.37-8.63Q120-17.25 120-30v-324l85-256q5-14 16.5-22t26.5-8h464q15 0 26.5 8t16.5 22l85 256v324q0 12.75-8.62 21.37Q822.75 0 810 0h-21q-12.75 0-21.37-8.63Q759-17.25 759-30v-54H200v54q0 12.75-8.62 21.37Q182.75 0 170 0zm53-414h554l-55-166H258zm82.76 220q23.24 0 38.74-15.75T340-248q0-23.33-15.75-39.67Q308.5-304 286-304q-23.33 0-39.67 16.26Q230-271.47 230-248.24q0 23.24 16.26 38.74 16.27 15.5 39.5 15.5M675-194q23.33 0 39.67-15.75Q731-225.5 731-248q0-23.33-16.26-39.67Q698.47-304 675.24-304q-23.24 0-38.74 16.26-15.5 16.27-15.5 39.5 0 23.24 15.75 38.74T675-194" />
	</svg>
)
export default SvgNoCrashFill

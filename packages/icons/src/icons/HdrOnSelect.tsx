import type { SVGProps } from "react"
const SvgHdrOnSelect = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-482q69 0 119-50t50-119-50-119-119-50-119 50-50 119 50 119 119 50m0 60q-95.42 0-162.21-66.79T251-651t66.79-162.21T480-880t162.21 66.79T709-651t-66.79 162.21T480-422M831-97v-80h-80v-49h80v-80h49v80h80v49h-80v80zM527-80v-251h143q22 0 35.5 13t13.5 35v52q0 22-11.5 35T676-175l39 95h-53l-35-89h-52v89zm48-137h96v-66h-96zM0-80v-251h48v87h93v-87h48v251h-48v-116H48v116zm263 0v-251h140q22 0 35 13t13 35v155q0 22-13 35t-35 13zm48-48h92v-155h-92zm169-523" />
	</svg>
)
export default SvgHdrOnSelect

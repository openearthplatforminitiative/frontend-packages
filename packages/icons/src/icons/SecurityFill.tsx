import type { SVGProps } from "react"
const SvgSecurityFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-140-35-230-162.5T160-522v-238l320-120 320 120v238q0 152-90 279.5T480-80m0-62q106-35 175.5-128.5T737-480H480v-335l-260 97v196q0 12 .5 20.5T223-480h257z" />
	</svg>
)
export default SvgSecurityFill

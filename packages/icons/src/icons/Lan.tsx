import type { SVGProps } from "react"
const SvgLan = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-80v-270h120v-160h210v-100H330v-270h300v270H510v100h210v160h120v270H540v-270h120v-100H300v100h120v270zm270-590h180v-150H390zM180-140h180v-150H180zm420 0h180v-150H600zm0-150" />
	</svg>
)
export default SvgLan

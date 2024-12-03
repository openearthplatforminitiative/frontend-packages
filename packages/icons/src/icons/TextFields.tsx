import type { SVGProps } from "react"
const SvgTextFields = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M290-160v-540H80v-100h520v100H390v540zm360 0v-340H520v-100h360v100H750v340z" />
	</svg>
)
export default SvgTextFields

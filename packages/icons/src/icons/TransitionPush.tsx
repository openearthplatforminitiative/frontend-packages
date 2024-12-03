import type { SVGProps } from "react"
const SvgTransitionPush = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M338-160v-59h82v-521h-82v-60h82q24 0 42 18t18 42v520q0 24-18 42t-42 18zm282 0q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h240q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-59h240v-521H620zM212-330l-43-42 76-78H40v-60h205l-76-76 42-42 149 148zm408 111v-521z" />
	</svg>
)
export default SvgTransitionPush

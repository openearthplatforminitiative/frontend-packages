import type { SVGProps } from "react"
const SvgTwoPager = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h310v-520H140zm370 0h310v-520H510zm-320-97h210v-60H190zm0-129h210v-60H190zm0-129h210v-60H190zm370 258h210v-60H560zm0-129h210v-60H560zm0-129h210v-60H560zM450-220v-520z" />
	</svg>
)
export default SvgTwoPager

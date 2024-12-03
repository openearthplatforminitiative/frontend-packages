import type { SVGProps } from "react"
const SvgShoppingBag = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880t106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h520v-520H630v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H390v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H220zm170-580h180v-10q0-38-26-64t-64-26-64 26-26 64zM220-140v-520z" />
	</svg>
)
export default SvgShoppingBag

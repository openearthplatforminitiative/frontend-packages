import type { SVGProps } from "react"
const SvgHighQuality = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M595-292h50v-65h41q14.45 0 24.22-9.49Q720-375.98 720-390v-179q0-14.45-9.78-24.22Q700.45-603 686-603H560q-14 0-27 9.78-13 9.77-13 24.22v179q0 14.02 13 23.51t27 9.49h35zm-355-65h50v-89h100v89h50v-246h-50v107H290v-107h-50zm330-50v-146h100v146zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" />
	</svg>
)
export default SvgHighQuality

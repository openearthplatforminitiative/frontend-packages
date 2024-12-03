import type { SVGProps } from "react"
const SvgContrastSquare = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600zm540-130H494v-50h226zM224-610h76v76h50v-76h76v-50h-76v-76h-50v76h-76z" />
	</svg>
)
export default SvgContrastSquare

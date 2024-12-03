import type { SVGProps } from "react"
const SvgMemoryFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M377-377v-205h205v205zm-17 257v-80H260q-24 0-42-18t-18-42v-100h-80v-60h80v-124h-80v-60h80v-100q0-24 18-42t42-18h100v-76h60v76h124v-76h60v76h100q24 0 42 18t18 42v100h76v60h-76v124h76v60h-76v100q0 24-18 42t-42 18H604v80h-60v-80H420v80zm344-140v-444H260v444z" />
	</svg>
)
export default SvgMemoryFill

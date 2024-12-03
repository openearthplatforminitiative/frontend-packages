import type { SVGProps } from "react"
const SvgUpgradeFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M280-160v-60h400v60zm170-170v-356L329-565l-42-42 193-193 193 193-42 42-121-121v356z" />
	</svg>
)
export default SvgUpgradeFill

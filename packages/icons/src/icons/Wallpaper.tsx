import type { SVGProps } from "react"
const SvgWallpaper = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-270h60v270h270v60zm330 0v-60h270v-270h60v270q0 24-18 42t-42 18zM237-268l118-152 93 127 132-171 147 196zM120-510v-270q0-24 18-42t42-18h270v60H180v270zm660 0v-270H510v-60h270q24 0 42 18t18 42v270zm-156-60q-23.4 0-38.7-15.3T570-624t15.3-38.7T624-678t38.7 15.3T678-624t-15.3 38.7T624-570" />
	</svg>
)
export default SvgWallpaper

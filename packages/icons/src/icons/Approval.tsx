import type { SVGProps } from "react"
const SvgApproval = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-80v-260q0-24 18-42t42-18h520q24 0 42 18t18 42v260zm60-160h520v-100H220zm260-160L281-680q0-83 58.21-141.5T480-880t140.79 58.5T679-680zm0-78 139-202q0-58.33-40.56-99.17Q537.88-820 479.94-820t-98.44 40.83Q341-738.33 341-680zm0-171" />
	</svg>
)
export default SvgApproval

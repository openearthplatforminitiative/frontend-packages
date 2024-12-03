import type { SVGProps } from "react"
const SvgBackupTable = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M260-260h250v-250H260zm0-310h560v-250H260zm310 310h250v-250H570zm-310 60q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h560q24 0 42 18t18 42v560q0 24-18 42t-42 18zM140-80q-24 0-42-18t-18-42v-620h60v620h620v60z" />
	</svg>
)
export default SvgBackupTable

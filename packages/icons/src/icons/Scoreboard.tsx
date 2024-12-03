import type { SVGProps } from "react"
const SvgScoreboard = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M608-365q-14 0-24.5-10.5T573-400v-160q0-14 10.5-24.5T608-595h99q14 0 24.5 10.5T742-560v160q0 14-10.5 24.5T707-365zm15-50h69v-130h-69zm-405 50v-104q0-14 10.5-24.5T253-504h84v-41H218v-50h134q14 0 24.5 10.5T387-560v69q0 14-10.5 24.5T352-456h-84v41h119v50zm237-158v-60h50v60zm0 146v-60h50v60zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h150v-80h60v80h260v-80h60v80h150q24 0 42 18t18 42v520q0 24-18 42t-42 18zm10-70h305v-60h50v60h305v-500H505v60h-50v-60H150zm0 0v-500z" />
	</svg>
)
export default SvgScoreboard

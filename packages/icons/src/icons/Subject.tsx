import type { SVGProps } from "react"
const SvgSubject = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-200v-60h386v60zm0-167v-60h640v60zm0-166v-60h640v60zm0-167v-60h640v60z" />
	</svg>
)
export default SvgSubject

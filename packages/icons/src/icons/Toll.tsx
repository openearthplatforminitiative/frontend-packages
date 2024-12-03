import type { SVGProps } from "react"
const SvgToll = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M600-160q-134 0-227-93t-93-227 93-227 227-93 227 93 93 227-93 227-227 93m-306-12q-113-14-183.5-103.5T40-480t70.5-204.5T294-788v58q-88 16-141 87.5T100-480t53 162.5T294-230zm306-48q107 0 183.5-76.5T860-480t-76.5-183.5T600-740t-183.5 76.5T340-480t76.5 183.5T600-220" />
	</svg>
)
export default SvgToll

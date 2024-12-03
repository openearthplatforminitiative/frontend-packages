import type { SVGProps } from "react"
const SvgNearby = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-277 277-480l203-203 203 203zm43 176q-9 9-20 13.5T481-83t-22.5-4.5T438-101L101-438q-9-9-13.5-20T83-480t4.5-22.5T101-523l338-338q8-8 19-12.5t22-4.5 22 4.5 19 12.5l338 338q9 9 13.5 20.33Q877-491.33 877-480q0 11.25-4.7 22.5-4.69 11.25-13.3 19.5zm-43-66 313-313-313-313-313 313z" />
	</svg>
)
export default SvgNearby

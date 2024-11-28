import * as React from "react"
import type { SVGProps } from "react"
const SvgOpenWithFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80 317-243l44-44 89 89v-189h60v189l89-89 44 44zM238-322 80-480l159-159 44 44-85 85h189v60H198l84 84zm484 0-44-44 84-84H574v-60h188l-84-84 44-44 158 158zM450-574v-188l-84 84-44-44 158-158 158 158-44 44-84-84v188z" />
	</svg>
)
export default SvgOpenWithFill

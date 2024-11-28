import * as React from "react"
import type { SVGProps } from "react"
const SvgAddLink = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M700-160v-120H580v-60h120v-120h60v120h120v60H760v120zM450-280H280q-83 0-141.5-58.5T80-480t58.5-141.5T280-680h170v60H280q-58.33 0-99.17 40.76-40.83 40.77-40.83 99Q140-422 180.83-381q40.84 41 99.17 41h170zM325-450v-60h310v60zm555-30h-60q0-58-40.83-99-40.84-41-99.17-41H510v-60h170q83 0 141.5 58.5T880-480" />
	</svg>
)
export default SvgAddLink
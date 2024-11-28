import * as React from "react"
import type { SVGProps } from "react"
const SvgEditAttributes = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M279-280q-83 0-141.5-58.5T79-480t58.5-141.5T279-680h400q83 0 141.5 58.5T879-480t-58.5 141.5T679-280zm0-60h400q58.33 0 99.17-40.76 40.83-40.77 40.83-99Q819-538 778.17-579q-40.84-41-99.17-41H279q-58.33 0-99.17 40.76-40.83 40.77-40.83 99Q139-422 179.83-381q40.84 41 99.17 41m43.37-48L465-530l-37-37-106 105-45-45-37 37zM480-480" />
	</svg>
)
export default SvgEditAttributes

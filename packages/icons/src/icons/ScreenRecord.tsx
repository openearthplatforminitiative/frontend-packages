import * as React from "react"
import type { SVGProps } from "react"
const SvgScreenRecord = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M159-243q-37-51-58-110.5T80-480t20.5-127T158-717l43 43q-29 42-45 91t-16 103 16.5 103.5T202-285zM480-80q-66 0-126.5-20.5T243-158l43-43q42 29 91 45t103 16 103-16 91-45l43 43q-50 37-110 57.5T480-80m322-162-43-43q29-42 45-91.5T820-480t-16-103-45-91l43-43q37 50 57.5 110T880-480t-20.5 127T802-242M285-759l-43-43q51-37 111-57.5T480-880t127 21 111 58l-43 43q-42-29-91-45.5T480-820q-54 0-103.5 16T285-759m195 469q-79 0-134.5-55.5T290-480t55.5-134.5T480-670t134.5 55.5T670-480t-55.5 134.5T480-290" />
	</svg>
)
export default SvgScreenRecord

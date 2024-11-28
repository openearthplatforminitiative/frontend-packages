import * as React from "react"
import type { SVGProps } from "react"
const SvgMarkChatUnread = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-80v-740q0-24 18-42t42-18h437q-4 14-6 29.5t-1 30.5H140v600l74-80h606v-349q16.79-5 31.4-13.5Q866-671 880-682v382q0 24-18 42t-42 18H240zm60-740v520zm619.88 101Q714-719 682-751.12t-32-78T682.12-907t78-32T838-906.88t32 78T837.88-751t-78 32" />
	</svg>
)
export default SvgMarkChatUnread

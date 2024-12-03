import type { SVGProps } from "react"
const SvgPerson2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M369-480q-27.43 0-45.71-20.5Q305-521 309-548l16-120q8-57 52-94.5T480-800t103 37.5 52 94.5l16 120q4 27-14.29 47.5Q618.43-480 591-480zm-1-60h224l-16.06-119.23Q571-694 543.5-717T480-740t-63.45 22.78Q389.11-694.44 384-659zM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420t123 15.5 127.92 44.69q31.3 14.13 50.19 40.97T800-254v94zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360t-111 11.5T252-306q-14 7-23 21.5t-9 30.5zm260 0" />
	</svg>
)
export default SvgPerson2

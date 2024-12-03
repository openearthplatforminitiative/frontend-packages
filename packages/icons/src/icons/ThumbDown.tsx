import type { SVGProps } from "react"
const SvgThumbDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M242-840h444v512L408-40l-39-31q-6-5-9-14t-3-22v-10l45-211H103q-24 0-42-18t-18-42v-81.84q0-7.16-1.5-14.66T43-499l126-290q8.88-21.25 29.59-36.13Q219.31-840 242-840m384 60H229L103-481v93h373l-53 249 203-214zm0 427v-427zm60 25v-60h133v-392H686v-60h193v512z" />
	</svg>
)
export default SvgThumbDown

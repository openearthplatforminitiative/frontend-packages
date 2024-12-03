import type { SVGProps } from "react"
const SvgRoutine = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M403-403q-35-35-64-74.5T287-562q-8 20-12 40.5t-4 41.5q0 87 61 148t148 61q21 0 41-4t40-12q-45-23-84-52t-74-64m43-42q50 50 109.5 86T684-303q-38 45-91 69t-112 24q-112 0-191-79t-79-191q0-59 24-112t69-91q20 69 56 128.5T446-445m274 90q-15-4-30-8.5T661-374q14-24 21.5-51t7.5-55q0-88-61-149t-149-61q-28 0-55 7.5T374-661q-5-14-9.5-28.5T356-719q29-15 60.5-23t64.5-8q112 0 191 79t79 191q0 33-8 64.5T720-355M450-840v-120h60v120zm0 840v-120h60V0zm306-713-43-43 85-84 43 42zM162-120l-43-42 85-85 43 43zm678-330v-60h120v60zM0-450v-60h120v60zm798 331-85-85 43-43 84 85zM204-713l-84-85 42-43 85 85zm199 310" />
	</svg>
)
export default SvgRoutine

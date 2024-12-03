import type { SVGProps } from "react"
const SvgOpenInPhone = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M260-40q-24 0-42-18t-18-42v-260h60v170h440v-580H260v170h-60v-260q0-24 18-42t42-18h440q24 0 42 18t18 42v760q0 24-18 42t-42 18zm0-90v30h440v-30zm143-198-43-43 79-79H80v-60h359l-79-79 43-43 152 152zM260-830h440v-30H260zm0 0v-30zm0 700v30z" />
	</svg>
)
export default SvgOpenInPhone

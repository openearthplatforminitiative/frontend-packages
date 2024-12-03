import type { SVGProps } from "react"
const SvgLightGroup = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M130-80v-60h300v60zm550-50q-29 0-49.5-20.5T610-200H470q-13 0-21.5-10.5T440-235q-2-96 59-163.5T650-477v-393h60v393q91 11 151.5 78.5T920-235q0 14-8.5 24.5T890-200H750q0 29-20.5 49.5T680-130m-430-70v-320H67q-15 0-24-12t-5-26l81-300q3-10 10.5-16t18.5-6h265q11 0 18.5 6t10.5 16l81 300q4 14-5 26t-24 12H310v320zm249-60h363q-10-69-61.5-114.5T680-420t-120 45.5T499-260M106-580h348l-63-240H171zm575 240" />
	</svg>
)
export default SvgLightGroup

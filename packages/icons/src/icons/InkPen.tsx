import type { SVGProps } from "react"
const SvgInkPen = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m480-522 42 42 249-249-42-42zM180-180h42l258-258-42-42-258 258zm362-238L418-542l198-198-30-30-234 234-43-43 228-228q25-25 49.5-25.5T637-807l23 23 45-45q11-11 25-11t25 11l73 73q11 11 11 26t-11 26zM244-120H120v-124l298-298 124 124z" />
	</svg>
)
export default SvgInkPen

import type { SVGProps } from "react"
const SvgTaunt = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M204-418q-21 11-44 5.5T126-439q-13-25-4.5-52t35.5-36l338-114 28 55zm46 298v-254l353-186-18-35 220-109 27 55-282 211v318zm50-460q-54 0-92-38t-38-92 38-92 92-38 92 38 38 92-38 92-92 38" />
	</svg>
)
export default SvgTaunt

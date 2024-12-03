import type { SVGProps } from "react"
const SvgHotel = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M40-200v-585h60v394h353v-309h322q59.81 0 102.41 42.59Q920-614.81 920-555v355h-60v-131H100v131zm230-249q-45 0-75.5-30.5T164-555t30.5-75.5T270-661t75.5 30.5T376-555t-30.5 75.5T270-449m243 58h347v-164q0-35.06-24.97-60.03T775-640H513zM270-509q19 0 32.5-13.5T316-555t-13.5-32.5T270-601t-32.5 13.5T224-555t13.5 32.5T270-509m243-131v249z" />
	</svg>
)
export default SvgHotel

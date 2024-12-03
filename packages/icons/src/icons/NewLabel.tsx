import type { SVGProps } from "react"
const SvgNewLabel = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M440-160v-60h171l195-260-195-260H140v260H80v-260q0-24.75 17.63-42.38Q115.25-800 140-800h471q14.25 0 27 6.37 12.75 6.38 21 17.63l222 296-221 296q-8.25 11.25-21 17.62-12.75 6.38-27 6.38zm-240 40v-120H80v-60h120v-120h60v120h120v60H260v120z" />
	</svg>
)
export default SvgNewLabel

import * as React from "react"
import type { SVGProps } from "react"
const SvgArtist = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M748-560h132v60h-83v235q0 47-29 76t-76 29-76-29-29-76 29-76 76-29q17 0 31 4t25 12zM80-160v-94q0-32 17-61.5t51-44.5q75-33 133.39-46.5T400-420q47 0 90.5 7.5T581-388q-12 11-21.09 22.65T544-340q-32-10-68-15t-76-5q-58 0-109 11t-119 43q-16 8-24 22.5t-8 29.5v34h390q4 19 11.5 34t18.5 26zm320-321q-66 0-108-42t-42-108 42-108 108-42 108 42 42 108-42 108-108 42m0-60q39 0 64.5-25.5T490-631t-25.5-64.5T400-721t-64.5 25.5T310-631t25.5 64.5T400-541m0 321" />
	</svg>
)
export default SvgArtist

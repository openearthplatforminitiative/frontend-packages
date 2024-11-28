import * as React from "react"
import type { SVGProps } from "react"
const SvgMetro = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-120v-720h147l213 557 212-557h148v720H740v-559L525-121h-90L220-675v555z" />
	</svg>
)
export default SvgMetro

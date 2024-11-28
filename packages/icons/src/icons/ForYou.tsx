import * as React from "react"
import type { SVGProps } from "react"
const SvgForYou = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-479q83 0 168.5-13T800-533v388q-62 29-149.5 47T480-80 309.5-98 160-145v-388q66 28 151.5 41T480-479m260 289v-263q-53 14-124.29 24-71.28 10-135.5 10-64.21 0-135.71-10T220-453v263q49 20 123.5 35T480-140t136.5-15T740-190M480-880q65 0 109.5 44.5T634-726t-44.5 109.5T480-572t-109.5-44.5T326-726t44.5-109.5T480-880m.16 248q38.84 0 66.34-27.66t27.5-66.5-27.66-66.34-66.5-27.5-66.34 27.66-27.5 66.5 27.66 66.34 66.5 27.5M480-297" />
	</svg>
)
export default SvgForYou

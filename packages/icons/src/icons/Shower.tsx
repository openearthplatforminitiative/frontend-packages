import * as React from "react"
import type { SVGProps } from "react"
const SvgShower = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M298-263q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9m182 0q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9m182 0q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9M200-413v-60q0-107 72.5-187T450-751v-89h60v89q105 11 177.5 91T760-473v60zm60-60h440q0-91-64.29-155.5T480.21-693 324.5-628.65 260-473m38 353q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9m182 0q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9m182 0q-12 0-21-9t-9-21 9-21 21-9 21 9 9 21-9 21-21 9M480-473" />
	</svg>
)
export default SvgShower
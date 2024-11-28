import * as React from "react"
import type { SVGProps } from "react"
const SvgCountertops = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-160v-340H80v-60h150q-28.87 0-49.44-20.56Q160-601.13 160-630v-170h230v170q0 28.87-20.56 49.44Q348.88-560 320-560h360v-130q0-21.25-14.32-35.63Q651.35-740 630.18-740q-21.18 0-35.68 15T581-690h-61q1-46 32.91-78t77.5-32T708-767.92q32 32.09 32 77.92v130h140v60h-80v340zm60-460h110v-120H220zm0 400h230v-280H220zm290 0h230v-280H510zM220-620h110zm0 400h520z" />
	</svg>
)
export default SvgCountertops

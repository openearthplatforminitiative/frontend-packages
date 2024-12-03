import type { SVGProps } from "react"
const SvgScatterPlot = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M692-120q-62 0-105-43t-43-105 43-105 105-43 105 43 43 105-43 105-105 43m0-60q38 0 63-25t25-63-25-63-63-25-63 25-25 63 25 63 63 25m-424-70q-62 0-105-43t-43-105 43-105 105-43 105 43 43 105-43 105-105 43m0-60q37 0 62.5-25.5T356-398t-25.5-62.5T268-486t-62.5 25.5T180-398t25.5 62.5T268-310m169-274q-62 0-105-43t-43-105 43-105 105-43 105 43 43 105-43 105-105 43m0-60q38 0 63-25t25-63-25-63-63-25-63 25-25 63 25 63 63 25m0-88" />
	</svg>
)
export default SvgScatterPlot

import * as React from "react"
import type { SVGProps } from "react"
const SvgBomb = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M346-48q-125 0-212.5-88.5T46-350t87-211.5T345-648h12l34-60q9-17 27-21.5t35 4.5l52 30 5-8q23-39 66.5-50.5T660-743l26 15-30 52-26-15q-18-11-38.5-5.5T561-673l-4 8 61 35q16 10 21 27.5t-5 33.5l-34 61q23 36 34.5 76.5T646-348q0 125-87.5 212.5T346-48m0-60q99 0 169.5-70.5T586-348q0-33-9.5-66T548-477l-19-30 46-79-139-80-45 78h-46q-100 0-170 70.5T105-350q0 101 70.5 171.5T346-108m474-510v-60h100v60zM590-848v-100h60v100zm195 77-42-42 71-71 42 42zM346-348" />
	</svg>
)
export default SvgBomb

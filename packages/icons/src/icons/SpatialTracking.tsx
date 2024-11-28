import * as React from "react"
import type { SVGProps } from "react"
const SvgSpatialTracking = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-441q-66 0-108-42t-42-108 42-108 108-42 108 42 42 108-42 108-108 42M160-120v-94q0-38 19-64.5t49-41.5q51-26 120.5-43T480-380t131 17 120 43q30 15 49.5 41.5T800-214v94zm60-60h520v-34q0-16.31-8.5-29.66Q723-257 707-266q-48-27-109-40.5T480-320t-118.5 14.5T252-266q-14 7-23 21.5t-9 30.5zm260-321q39 0 64.5-25.5T570-591t-25.5-64.5T480-681t-64.5 25.5T390-591t25.5 64.5T480-501M39-779v-60q17 0 31-6.58t25-17.72 17-25.31q6-14.18 6-31.39h61q0 29-10.94 54.57-10.93 25.58-30.18 44.98t-44.63 30.43Q67.88-779 39-779m0 140v-60q46 0 86.21-17.39Q165.42-733.79 195-764q30-30 47-70.01 17-40 17-85.99h61q0 58-22 109.5T238-721t-89.03 60Q97.95-639 39-639m881 0q-58 0-109.5-22T721-721t-60-89.47Q639-861.93 639-920h61q0 46 17.13 85.87Q734.25-794.25 764-764q30.28 29.75 70.2 46.87Q874.12-700 920-700zm0-141q-29 0-54.35-10.94-25.34-10.94-44.57-30.19t-30.15-44.62Q780-891.13 780-920h60q0 17 6.5 31t17.5 25 25 17.5 31 6.5zM480-180" />
	</svg>
)
export default SvgSpatialTracking
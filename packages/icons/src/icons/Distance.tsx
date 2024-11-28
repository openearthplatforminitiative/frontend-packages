import * as React from "react"
import type { SVGProps } from "react"
const SvgDistance = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80q-106 0-173-31t-67-79q0-26 23-49.5t63-38.5l45 42q-20 5-39 18.5T299-190q17 20 70.5 35T480-140t111-15 71-35q-14-15-35-28t-41-18l46-42q42 15 65 38.5t23 49.5q0 48-67 79T480-80m1-195q109-81 164-164t55-155q0-112-71-169t-149-57q-77 0-148.5 57T260-594q0 73 55 152t166 167m-1 75Q340-304 270-402t-70-192q0-71 25.5-124.5t66-89.5 90-54 98.5-18 99 18 90 54 65.5 89.5T760-594q0 94-69.5 192T480-200m0-320q33 0 56.5-23.5T560-600t-23.5-56.5T480-680t-56.5 23.5T400-600t23.5 56.5T480-520m0-80" />
	</svg>
)
export default SvgDistance

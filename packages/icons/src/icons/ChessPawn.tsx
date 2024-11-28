import * as React from "react"
import type { SVGProps } from "react"
const SvgChessPawn = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-80v-189q98-69 139-138.33 41-69.34 56-122.67H243v-60h105q-20-23-31.5-52.49Q305-671.97 305-705q0-72.92 51.04-123.96T480-880q72 0 123.5 51.04T655-705q0 33.03-11.5 62.51Q632-613 612-590h105v60H605q15 53 55 122.5T800-269v189zm60-60h520v-97q-93-73-138-155.5T543-530H417q-14 55-59 137.5T220-237zm259.79-450q48.21 0 81.71-33.29t33.5-81.5-33.29-81.71-81.5-33.5-81.71 33.29-33.5 81.5 33.29 81.71 81.5 33.5m.21-115" />
	</svg>
)
export default SvgChessPawn
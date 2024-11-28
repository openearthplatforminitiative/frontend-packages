import * as React from "react"
import type { SVGProps } from "react"
const SvgEco = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M213-175q-43.59-45-68.3-104Q120-338 120-400q0-73 25.5-133.5T222-645q35-35 87-59t122.5-37.5 159.5-17 198 3.5q8 108 5.5 197.5t-16 160.75-38 124.56Q716-218.87 680-183q-51 51-110 77T444-80q-69 0-126.5-23.5T213-175m103 0q25 17 58 26t69.92 9Q497-140 547-162t91-64q27-27 46-70.5t31-103T731-534t0-165q-94-2-168.5 2.5T431-680t-98 30.5-67 45.5q-42 43-64 91t-22 98q0 48 20.5 100.5T251-230q53-98 127-176t157-123q-87 75-141 162.5T316-175m0 0" />
	</svg>
)
export default SvgEco

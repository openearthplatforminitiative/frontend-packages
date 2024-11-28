import * as React from "react"
import type { SVGProps } from "react"
const SvgGridGuides = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M222-180h515L620-297q-29 23-64.5 35T480-250t-75.5-12.5T340-298zm-42-43 117-117q-23-29-35-64.5T250-480t12.5-75.5T298-620L180-738zm160-160 98-97-97-97q-14 21-22.5 45.5T310-480t8 51.5 22 45.5m140 73q27 0 51.5-8t45.5-22l-97-98-97 97q21 14 45.5 22.5T480-310m0-213 97-96q-21-14-45.5-22.5T480-650t-52 8-45 22zm140 140q14-20 22-45t8-52-8.5-51.5T619-577l-97 96zm160 160v-515L662-620q23 29 35.5 64.5T710-480t-12 75.5-35 64.5zM620-662l118-118H223l117 117q29-23 64.5-35t75.5-12 75.5 12.5T620-662M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" />
	</svg>
)
export default SvgGridGuides

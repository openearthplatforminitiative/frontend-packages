import * as React from "react"
import type { SVGProps } from "react"
const SvgMap = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m612-120-263-93-179 71q-17 9-33.5-1T120-173v-558q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840-788v565q0 11-7.5 19T814-192zm-34-75v-505l-196-66v505zm60 0 142-47v-512l-142 54zm-458-12 142-54v-505l-142 47zm458-493v505zm-316-66v505z" />
	</svg>
)
export default SvgMap

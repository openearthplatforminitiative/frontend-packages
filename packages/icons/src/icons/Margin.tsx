import * as React from "react"
import type { SVGProps } from "react"
const SvgMargin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600zm134 173q16.58 0 27.79-11.21T353-646t-11.21-27.79T314-685t-27.79 11.21T275-646t11.21 27.79T314-607m166 0q17 0 28.5-11.21T520-646t-11.5-27.79T480-685q-16 0-27 11.5T442-646t10.92 27.5Q463.85-607 480-607m167 0q16.58 0 27.79-11.21T686-646t-11.21-27.79T647-685t-27.79 11.21T608-646t11.21 27.79T647-607m0 166q16.58 0 27.79-11.21T686-480t-11.21-27.79T647-519t-27.79 11.21T608-480t11.21 27.79T647-441m-167 0q17 0 28.5-11.21T520-480t-11.5-27.79T480-519q-16 0-27 11.5T442-480t10.92 27.5Q463.85-441 480-441m-166 0q16.58 0 27.79-11.21T353-480t-11.21-27.79T314-519t-27.79 11.21T275-480t11.21 27.79T314-441" />
	</svg>
)
export default SvgMargin

import * as React from "react"
import type { SVGProps } from "react"
const SvgRouter = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-204q0-24 18-42t42-18h436v-176h60v176h104q24 0 42 18t18 42v204q0 24-18 42t-42 18zm0-60h600v-204H180zm102.11-60Q300-240 312-252.11q12-12.1 12-30Q324-300 311.89-312q-12.1-12-30-12Q264-324 252-311.89q-12 12.1-12 30Q240-264 252.11-252q12.1 12 30 12m148 0Q448-240 460-252.11q12-12.1 12-30Q472-300 459.89-312q-12.1-12-30-12Q412-324 400-311.89q-12 12.1-12 30Q388-264 400.11-252q12.1 12 30 12m148 0Q596-240 608-252.11q12-12.1 12-30Q620-300 607.89-312q-12.1-12-30-12Q560-324 548-311.89q-12 12.1-12 30Q536-264 548.11-252q12.1 12 30 12M566-667l-41-41q24-24 54.43-38T646-760t66.57 14T767-708l-41 41q-14-14-35-23.5t-44.5-9.5-45 9.5T566-667m-85-85-44-44q33-33 88-58.5T646-880t121 25.5 88 58.5l-44 44q-26-29-68.5-48.5T646-820t-96.5 19.5T481-752M180-180v-204z" />
	</svg>
)
export default SvgRouter
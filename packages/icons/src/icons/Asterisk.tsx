import * as React from "react"
import type { SVGProps } from "react"
const SvgAsterisk = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M450-120v-288L247-205l-42-42 203-203H120v-60h289L205-714l42-42 203 203v-287h60v288l204-204 42 42-204 204h288v60H553l203 203-42 42-204-204v289z" />
	</svg>
)
export default SvgAsterisk

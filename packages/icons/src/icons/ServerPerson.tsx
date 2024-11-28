import * as React from "react"
import type { SVGProps } from "react"
const SvgServerPerson = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H611l-41-82H390l-42.5 82zm0-60h91l42-82h254l41 82h92v-680H220zm100-221h320v-19q0-51-50.5-69.5T480-468t-109.5 18.5T320-380zm159.92-174q30.08 0 51.58-21.42t21.5-51.5-21.42-51.58-51.5-21.5-51.58 21.42-21.5 51.5 21.42 51.58 51.5 21.5m.08 55" />
	</svg>
)
export default SvgServerPerson

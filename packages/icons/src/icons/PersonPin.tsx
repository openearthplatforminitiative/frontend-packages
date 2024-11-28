import * as React from "react"
import type { SVGProps } from "react"
const SvgPersonPin = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-40 359-161H180q-24 0-42-18t-18-42v-600q0-24.75 18-42.38Q156-881 180-881h600q24 0 42 17.62 18 17.63 18 42.38v600q0 24-18 42t-42 18H601zM180-258q60-56 135.9-90.5 75.89-34.5 164-34.5 88.1 0 164.1 34.5T780-258v-563H180zm302-204q58 0 98-40t40-98-40-98-98-40-98 40-40 98 40 98 98 40M235-221h490v-9q-54-46-116-69.5T480-323t-129 23.5T235-230zm247-301q-32.5 0-55.25-22.75T404-600t22.75-55.25T482-678t55.25 22.75T560-600t-22.75 55.25T482-522m-2-18" />
	</svg>
)
export default SvgPersonPin

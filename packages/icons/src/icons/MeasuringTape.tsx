import * as React from "react"
import type { SVGProps } from "react"
const SvgMeasuringTape = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-160v-340q0-142 99-241t241-99 241 99 99 241-99 241-241 99zm60-60h280q116.31 0 198.15-81.78 81.85-81.79 81.85-198Q820-616 738.22-698q-81.79-82-198-82Q424-780 342-698.15 260-616.31 260-500zm280-140q58 0 99-41t41-99-41-99-99-41-99 41-41 99 41 99 99 41m.24-60q-33.24 0-56.74-23.26-23.5-23.27-23.5-56.5 0-33.24 23.26-56.74 23.27-23.5 56.5-23.5 33.24 0 56.74 23.26 23.5 23.27 23.5 56.5 0 33.24-23.26 56.74-23.27 23.5-56.5 23.5M80-160v-200h60v200zm460-340" />
	</svg>
)
export default SvgMeasuringTape

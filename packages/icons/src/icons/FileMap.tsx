import type { SVGProps } from "react"
const SvgFileMap = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm300-59q98.01-82.58 146.01-153.58Q674-463.58 674-524q0-91-58.6-144-58.61-53-135.4-53t-135.4 53Q286-615 286-524q0 60 48.5 131T480-239m0-229q-23 0-39.5-16.5T424-524t16.5-39.5T480-580t39.5 16.5T536-524t-16.5 39.5T480-468M180-180v-600z" />
	</svg>
)
export default SvgFileMap

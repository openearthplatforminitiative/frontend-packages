import * as React from "react"
import type { SVGProps } from "react"
const SvgExtension = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M356-120H180q-24 0-42-18t-18-42v-176q44-5 75.5-34.5T227-463t-31.5-72.5T120-570v-176q0-24 18-42t42-18h177q11-40 39.5-67t68.5-27 68.5 27 39.5 67h173q24 0 42 18t18 42v173q40 11 65.5 41.5T897-461t-25.5 67-65.5 38v176q0 24-18 42t-42 18H570q-5-48-35.5-77.5T463-227t-71.5 29.5T356-120m-176-60h130q25-61 69.89-84t83-23T546-264t70 84h130v-235h45q20 0 33-13t13-33-13-33-33-13h-45v-239H511v-48q0-20-13-33t-33-13-33 13-13 33v48H180v130q48.15 17.82 77.58 59.69Q287-514.45 287-462.78 287-412 257.5-370T180-310zm285-281" />
	</svg>
)
export default SvgExtension

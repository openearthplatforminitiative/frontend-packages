import type { SVGProps } from "react"
const SvgLocalLibrary = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-60q-78-69-170.5-106T120-203v-429q94 0 186.5 43T480-469q81-77 173.5-120T840-632v429q-97 0-189.5 37T480-60m0-77q71-51 146.5-81.5T780-257v-310q-68 11-143.5 54.5T480-392q-88-81-160-123t-140-52v310q78 8 153.5 38.5T480-137m3-475q-65 0-109.5-44.5T329-766t44.5-109.5T483-920t109.5 44.5T637-766t-44.5 109.5T483-612m.16-60q38.84 0 66.34-27.66t27.5-66.5-27.66-66.34-66.5-27.5-66.34 27.66-27.5 66.5 27.66 66.34 66.5 27.5M480-392" />
	</svg>
)
export default SvgLocalLibrary

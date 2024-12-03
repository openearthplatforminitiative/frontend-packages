import type { SVGProps } from "react"
const SvgPlayLesson = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M493-139q3 14 11.5 31T522-79H180q-24 0-42-18t-18-42v-681q0-24 18-42t42-18h520q24 0 42 18t18 42v339q-13.5-2-30-2t-30 2v-339H462v278l-96-59-96 59v-278h-90v681zm235 99q-81 0-136.5-55.5T536-232t55.5-136.5T728-424t136.5 55.5T920-232 864.5-95.5 728-40m-49-100 143-92-143-92zM270-820h192zm223 0H180h520-223z" />
	</svg>
)
export default SvgPlayLesson

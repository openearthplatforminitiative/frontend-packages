import type { SVGProps } from "react"
const SvgBodySystem = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m324-240 80-386-101 43v93h-61v-133l192-81q14-6 29.5-7.5T494-710q17 3 29.5 11t20.5 20l42 66q26 41 67.5 72t69.5 31v60q-40-2-94-33.5T532-574l-27 98 92 83v153h-60v-122l-100-91-52 213zm226-514q-30 0-51.5-21.5T477-827t21.5-51.5T550-900t51.5 21.5T623-827t-21.5 51.5T550-754M480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-118 61.5-213T302-838l27 54q-85 42-137 123t-52 181q0 141 99.5 240.5T480-140q142 0 241-99.5T820-480h60q0 82-31.5 155T763-197.5t-127 86T480-80" />
	</svg>
)
export default SvgBodySystem

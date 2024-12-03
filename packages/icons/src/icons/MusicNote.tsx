import type { SVGProps } from "react"
const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M393-120q-63 0-106.5-43.5T243-270t43.5-106.5T393-420q28 0 50.5 8t39.5 22v-450h234v135H543v435q0 63-43.5 106.5T393-120" />
	</svg>
)
export default SvgMusicNote

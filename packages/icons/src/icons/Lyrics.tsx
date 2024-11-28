import * as React from "react"
import type { SVGProps } from "react"
const SvgLyrics = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M80-80v-740q0-24.75 17.63-42.38Q115.25-880 140-880h480q24.75 0 42.38 17.62Q680-844.75 680-820v59q-17 9-32.36 21-15.35 12-27.64 27v-107H140v596l74-76h406v-187q12.29 15 27.64 27Q663-448 680-439v139q0 24.75-17.62 42.37Q644.75-240 620-240H240zm160-330h160v-60H240zm519.88-80Q714-490 682-522.12t-32-78T682.06-678t77.86-32q10.08 0 22.58 3t27.5 8v-221h150v60h-90v260q0 45.83-32.12 77.92-32.12 32.08-78 32.08M240-530h280v-60H240zm0-120h280v-60H240zM140-300v-520z" />
	</svg>
)
export default SvgLyrics
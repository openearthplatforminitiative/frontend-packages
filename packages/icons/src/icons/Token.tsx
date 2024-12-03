import type { SVGProps } from "react"
const SvgToken = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-80 120-286v-399l360-195 360 195v399zM366-578q23-23 52.5-37.5T480-630t61.5 14.5T594-578l153-90-267-142-267 142zm84 412v-167q-52-14-86-54t-34-93q0-11 1.5-22.5T337-525l-157-93v297zm30-224q38 0 64-26t26-64-26-64-64-26-64 26-26 64 26 64 64 26m30 224 270-155v-297l-157 93q4 11 5.5 22.5T630-480q0 53-34 93t-86 54z" />
	</svg>
)
export default SvgToken

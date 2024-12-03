import type { SVGProps } from "react"
const SvgPhotoFrame = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M190-120q-12.75 0-21.37-8.63Q160-137.25 160-150v-50h-60q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h760q24 0 42 18t18 42v480q0 24-18 42t-42 18h-60v50q0 12.75-8.62 21.37Q782.75-120 770-120zm-90-140h760v-480H100zm120-110h520L580-584 440-404 340-524zM100-260v-480z" />
	</svg>
)
export default SvgPhotoFrame

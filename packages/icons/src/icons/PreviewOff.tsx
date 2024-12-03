import type { SVGProps } from "react"
const SvgPreviewOff = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-285q-80 0-143-43t-92-112q19-46 54.5-80.5T382-575l39 39q-38 11-69.5 36T300-440q27 49 75 77t105 28q30 0 58.5-8t52.5-23l35 35q-31 22-68 34t-78 12m191-86-35-35q7-8 13-16.5t11-17.5q-25-45-67.5-72T498-544l-49-49q85-11 159 31.5T715-440q-8 20-19 37t-25 32M815-56l-64-64H180q-25 0-42.5-17.5T120-180v-571l-54-54 43-43L858-99zM180-180h511L180-692zm660-22-60-60v-421H359L202-840h578q25 0 42.5 17.5T840-780z" />
	</svg>
)
export default SvgPreviewOff

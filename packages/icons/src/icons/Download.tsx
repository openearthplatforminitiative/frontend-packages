import type { SVGProps } from "react"
const SvgDownload = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43zM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18z" />
	</svg>
)
export default SvgDownload

import type { SVGProps } from "react"
const SvgFormatUnderlined = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M200-140v-60h560v60zm280-140q-100 0-156.5-58.5T267-497v-343h83v343q0 63 34 101t96 38 96-38 34-101v-343h83v343q0 100-56.5 158.5T480-280" />
	</svg>
)
export default SvgFormatUnderlined

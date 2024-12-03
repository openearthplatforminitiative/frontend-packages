import type { SVGProps } from "react"
const SvgStorage = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-160v-148h720v148zm60-38h72v-72h-72zm-60-454v-148h720v148zm60-38h72v-72h-72zm-60 284v-148h720v148zm60-38h72v-72h-72z" />
	</svg>
)
export default SvgStorage

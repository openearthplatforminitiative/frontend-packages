import type { SVGProps } from "react"
const SvgLicense = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480-450q-45 0-77.5-32.5T370-560t32.5-77.5T480-670t77.5 32.5T590-560t-32.5 77.5T480-450M244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92 228 92 92 228q0 57-19.5 113T716-344v304l-236-79zm236-260q109 0 184.5-75.5T740-560t-75.5-184.5T480-820t-184.5 75.5T220-560t75.5 184.5T480-300M304-124l176-55 176 55v-171q-40 29-86 42t-90 13-90-13-86-42zm176-86" />
	</svg>
)
export default SvgLicense

import type { SVGProps } from "react"
const SvgSwitches = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M270-289q-80 0-135-54.5T80-479t54.5-135.5T270-669q51 0 90 22t65 63h350q43.75 0 74.38 30.68Q880-522.65 880-478.82q0 43.82-30.62 74.32Q818.75-374 775-374H425q-26 41-65 63t-90 22m183-145h322q20 0 32.5-12.5T820-479t-12.5-32.5T775-524H453q4 10 5.5 22t1.5 23-1.5 23-5.5 22m-183 85q55 0 92.5-37.5T400-479t-37.5-92.5T270-609t-92.5 37.5T140-479t37.5 92.5T270-349" />
	</svg>
)
export default SvgSwitches

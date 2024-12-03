import type { SVGProps } from "react"
const SvgAtr = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M230-160q-45 0-77.5-32.5T120-270t32.5-77.5T230-380t77.5 32.5T340-270t-32.5 77.5T230-160m500 0q-45 0-77.5-32.5T620-270t32.5-77.5T730-380q46 0 78 32.5t32 77.5-32 77.5-78 32.5M480-580q-45 0-77.5-32.5T370-690t32.5-77.5T480-800t77.5 32.5T590-690t-32.5 77.5T480-580" />
	</svg>
)
export default SvgAtr

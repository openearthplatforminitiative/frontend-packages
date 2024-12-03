import type { SVGProps } from "react"
const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M215-117q-33.83 0-66.92-11.5Q115-140 90-166q35-12 50-35t15-62q0-43.75 30.68-74.38Q216.35-368 260.18-368q43.82 0 74.32 30.62Q365-306.75 365-263q0 64-43.5 105T215-117m0-60q35 0 62.5-25t27.5-61q0-20-12.5-32.5T260-308t-32.5 12.5T215-263q0 39-8.5 57.5T175-183q6 1 20 3.5t20 2.5m230-177-90-95 376-376q14-14 31-14.5t32 14.5l29 29q15 15 14.5 32.5T823-732zm-185 91" />
	</svg>
)
export default SvgBrush

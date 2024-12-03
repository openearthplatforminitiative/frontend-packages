import type { SVGProps } from "react"
const SvgFavorite = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="m480-121-41-37q-105.77-97.12-174.88-167.56Q195-396 154-451.5T96.5-552 80-643q0-90.15 60.5-150.58Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.42Q880-733.15 880-643q0 46-16.5 91T806-451.5 695.88-325.56Q626.77-255.12 521-158zm0-79q101.24-93 166.62-159.5T750.5-476t54-89.14q15.5-39.13 15.5-77.72 0-66.14-42-108.64T670.22-794q-51.52 0-95.37 31.5T504-674h-49q-26-56-69.85-88t-95.37-32Q224-794 182-751.5t-42 108.82q0 38.68 15.5 78.18t54 90T314-358t166 158m0-297" />
	</svg>
)
export default SvgFavorite

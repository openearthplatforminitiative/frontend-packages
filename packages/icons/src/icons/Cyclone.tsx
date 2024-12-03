import type { SVGProps } from "react"
const SvgCyclone = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M480.5-330Q418-330 374-374.06 330-418.13 330-480q0-63 44.06-106.5Q418.13-630 480-630q63 0 106.5 43.5t43.5 106T586.5-374t-106 44m-.5-60q38 0 64-26.44T570-480q0-38-26-64t-63.5-26-64 26-26.5 63.5 26.44 64T480-390M681-80q18-56 29-109.5t16-79.5q-51 58-116 84.5T480-158q-136 0-238.5-19.5T80-214v-64q56 18 110.5 29t80.5 16q-55-45-84-113.5T158-480q0-137 19.5-239T214-880h64q-18 56-28.5 109.5T235-691q48-55 114-83t131-28q137 0 239 19.5T880-746v64q-56-18-109.5-29T691-726q57 49 84 115t27 131q0 137-19.5 239T746-80zM479.88-218Q589-218 665.5-294.38t76.5-185.5-76.38-185.62-185.5-76.5-185.62 76.38-76.5 185.5 76.38 185.62 185.5 76.5" />
	</svg>
)
export default SvgCyclone

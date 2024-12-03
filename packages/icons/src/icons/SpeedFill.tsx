import type { SVGProps } from "react"
const SvgSpeedFill = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M418-340q25 25 63 23.5t55-27.5l221-333-333 221q-26 18-28.5 54.5T418-340M192-160q-18 0-34-8.5T134-193q-26-48-40-100T80-399q0-83 31.5-156T197-682.5t126.5-86T478-800q83 0 156.5 31.5t128 86 86 127.5T880-399q0 54-13 106.5T827-193q-9 16-25 24.5t-34 8.5z" />
	</svg>
)
export default SvgSpeedFill

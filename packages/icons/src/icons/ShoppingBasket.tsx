import * as React from "react"
import type { SVGProps } from "react"
const SvgShoppingBasket = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M206-120q-20 0-36.5-12T148-164L38-562q-4-14 4.83-26 8.82-12 24.17-12h202l185-270q5-6 11-9.5t14-3.5 14 3.5 11 9.5l184 270h206q15.35 0 24.17 12 8.83 12 4.83 26L812-164q-5 20-21.5 32T754-120zm0-60h548l101-360H106zm274.18-120q24.82 0 42.32-17.68 17.5-17.67 17.5-42.5 0-24.82-17.68-42.32-17.67-17.5-42.5-17.5-24.82 0-42.32 17.68-17.5 17.67-17.5 42.5 0 24.82 17.68 42.32 17.67 17.5 42.5 17.5M342-600h273L479-800zm139 240" />
	</svg>
)
export default SvgShoppingBasket

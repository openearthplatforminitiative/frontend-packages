import * as React from "react"
import type { SVGProps } from "react"
const SvgLiquor = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M120-80v-60h78v-141q-35-10-56.5-38.5T120-386v-334h216v334q0 35-21.5 65T258-281v141h78v60zm60-419h96v-161h-96zm48 161q19 0 33.5-14.5T276-386v-53h-96v53q0 19 14.5 33.5T228-338M520-80q-24 0-42-18t-18-42v-408q0-20 11-32t31-21l38-17q24-11 35-27t11-39v-161q0-16 9.5-25.5T621-880h94q16 0 25.5 9.5T750-845v161q0 23 13.5 39t37.5 27l38 17q19 8 30 20.5t11 32.5v408q0 24-18 42t-42 18zm126-696h44v-44h-44zM520-465h300v-83l-42-16q-40-15-64-49t-24-75v-28h-44v28q0 41-22.5 72T563-568l-43 20zm0 325h300v-103H520zm0-163h300v-102H520zm0 0v-102z" />
	</svg>
)
export default SvgLiquor

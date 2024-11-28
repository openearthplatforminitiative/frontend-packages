import * as React from "react"
import type { SVGProps } from "react"
const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M602-319h131q12.75 0 21.38-8.63Q763-336.25 763-349v-262q0-12.75-8.62-21.38Q745.75-641 733-641H602q-12.75 0-21.37 8.62Q572-623.75 572-611v262q0 12.75 8.63 21.37Q589.25-319 602-319m30-60v-202h71v202zm-278 60h126q12.75 0 21.38-8.63Q510-336.25 510-349v-262q0-12.75-8.62-21.38Q492.75-641 480-641H354q-12.75 0-21.37 8.62Q324-623.75 324-611v262q0 12.75 8.63 21.37Q341.25-319 354-319m30-60v-202h66v202zm-187 60h60v-322h-60zM80-160v-640h800v640zm60-580v520zm0 520h680v-520H140z" />
	</svg>
)
export default SvgMoney

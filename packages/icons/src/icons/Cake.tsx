import * as React from "react"
import type { SVGProps } from "react"
const SvgCake = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M160-80q-17 0-28.5-11.5T120-120v-219q0-24.75 17.63-42.38Q155.25-399 180-399h27v-182q0-24.75 17.63-42.38Q242.25-641 267-641h183v-64q-20-14-30.5-30.53-10.5-16.54-10.5-39.88 0-14.59 5.5-28.09T430-827l50-53 50 53q10 10 16 23.5t6 28.09q0 23.34-11 39.88Q530-719 510-705v64h183q24.75 0 42.38 17.62Q753-605.75 753-581v182h27q24.75 0 42.38 17.62Q840-363.75 840-339v219q0 17-11.5 28.5T800-80zm107-319h426v-182H267zm-87 259h600v-199H180zm87-259h426zm-87 259h600zm600-259H180z" />
	</svg>
)
export default SvgCake
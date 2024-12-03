import type { SVGProps } from "react"
const SvgFiberNew = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 -960 960 960"
		{...props}
	>
		<path d="M100-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h760q24.75 0 42.38 18Q920-764 920-740v520q0 24-17.62 42-17.63 18-42.38 18zm0-60h760v-520H100zm30-137h45v-170l116 170h43v-246h-45v170L175-603h-45zm249 0h157v-45H429v-54h107v-45H429v-56h107v-46H379zm248 0h170q14.45 0 24.22-9.49Q831-375.98 831-390v-213h-45v196h-53v-155h-45v155h-49v-196h-45v213q0 14.02 9.49 23.51Q612.97-357 627-357M100-220v-520z" />
	</svg>
)
export default SvgFiberNew
